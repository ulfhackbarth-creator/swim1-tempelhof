import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const allowedOrigins = [
  "https://swim1-tempelhof.lovable.app",
  "https://schwimmkurse-tempelhofer-hafen.de",
  "https://www.schwimmkurse-tempelhofer-hafen.de",
  "https://swim1.de",
  "https://www.swim1.de",
];

// Also allow Lovable preview origins for development
function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  if (allowedOrigins.includes(origin)) return true;
  // Allow Lovable preview/project domains during development
  if (origin.endsWith(".lovable.app") || origin.endsWith(".lovableproject.com")) return true;
  return false;
}

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  return {
    "Access-Control-Allow-Origin": isAllowedOrigin(origin) ? origin : allowedOrigins[0],
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Max submissions per window
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true;
  }

  record.count++;
  return false;
}

interface WaitlistRequest {
  name: string;
  email: string;
  plz: string;
  interests: string[];
  city: string;
}

function validateInput(data: unknown): { valid: boolean; error?: string; data?: WaitlistRequest } {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const { name, email, plz, interests, city } = data as Record<string, unknown>;

  // Validate name
  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
    return { valid: false, error: "Name muss zwischen 2 und 100 Zeichen haben" };
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string" || !emailRegex.test(email.trim()) || email.length > 255) {
    return { valid: false, error: "Bitte gib eine gültige E-Mail ein" };
  }

  // Validate PLZ
  if (typeof plz !== "string" || plz.trim().length < 3 || plz.trim().length > 50) {
    return { valid: false, error: "PLZ/Stadtteil muss zwischen 3 und 50 Zeichen haben" };
  }

  // Validate interests
  if (!Array.isArray(interests) || interests.length === 0) {
    return { valid: false, error: "Bitte wähle mindestens ein Interesse" };
  }

  const validInterests = ["baby", "seepferdchen", "fortgeschrittene", "erwachsene", "aquafitness", "aquareha"];
  for (const interest of interests) {
    if (typeof interest !== "string" || !validInterests.includes(interest)) {
      return { valid: false, error: "Ungültiges Interesse ausgewählt" };
    }
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      plz: plz.trim(),
      interests: interests as string[],
    },
  };
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    console.log(`Waitlist submission attempt from IP: ${clientIP}`);

    // Check rate limit
    if (isRateLimited(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Zu viele Anfragen. Bitte versuche es später erneut." }),
        {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Parse and validate request body
    const body = await req.json();
    const validation = validateInput(body);

    if (!validation.valid || !validation.data) {
      console.log(`Validation failed: ${validation.error}`);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Create Supabase client with service role for insert
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase configuration");
      throw new Error("Server configuration error");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert into waitlist
    const { error: insertError } = await supabase.from("waitlist").insert({
      name: validation.data.name,
      email: validation.data.email,
      plz: validation.data.plz,
      interests: validation.data.interests,
    });

    if (insertError) {
      console.error("Insert error:", insertError);
      
      if (insertError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "Diese E-Mail ist bereits eingetragen.", code: "DUPLICATE_EMAIL" }),
          {
            status: 409,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      throw insertError;
    }

    console.log(`Successfully added to waitlist: ${validation.data.email}`);

    return new Response(
      JSON.stringify({ success: true, message: "Erfolgreich eingetragen!" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return new Response(
      JSON.stringify({ error: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
