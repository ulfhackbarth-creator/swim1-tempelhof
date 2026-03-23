import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Users } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen ein").max(100),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail ein").max(255),
  plz: z.string().trim().min(3, "Bitte gib deinen Stadtteil oder PLZ ein").max(50),
  interests: z.array(z.string()).min(1, "Bitte wähle mindestens ein Interesse"),
});

const interestOptions = [
  { id: "baby", label: "Baby / Eltern-Kind (ab 2 Monate)" },
  { id: "seepferdchen", label: "Seepferdchen ab 3,5 Jahren" },
  { id: "fortgeschrittene", label: "Fortgeschrittene (Bronze / Silber / Gold)" },
  { id: "erwachsene", label: "Erwachsenenkurse (Anfänger & Technik)" },
  { id: "aquafitness", label: "Aquafitness" },
  { id: "aquareha", label: "Aqua Reha" },
];

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plz: "",
    interests: [] as string[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInterestChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, id]
        : prev.interests.filter((i) => i !== id),
    }));
    setErrors((prev) => ({ ...prev, interests: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as string;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-waitlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
          body: JSON.stringify({
            name: result.data.name,
            email: result.data.email,
            plz: result.data.plz,
            interests: result.data.interests,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (data.code === "DUPLICATE_EMAIL") {
          setErrors({ email: "Diese E-Mail ist an diesem Standort bereits eingetragen." });
          setIsLoading(false);
          return;
        }
        throw new Error(data.error || "Unbekannter Fehler");
      }

      setIsSubmitted(true);
      toast({
        title: "Erfolgreich eingetragen!",
        description: "Du erhältst alle Neuigkeiten zuerst.",
      });
    } catch (error) {
      console.error("Waitlist submission error:", error);
      toast({
        title: "Fehler beim Eintragen",
        description: "Bitte versuche es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="warteliste" className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-md mx-auto text-center bg-card p-8 md:p-10 rounded-2xl shadow-card"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Danke für dein Interesse!
            </h3>
            <p className="text-muted-foreground">
              Du bist jetzt auf der Warteliste. Wir melden uns mit Startinfo und Kursplätzen zuerst bei dir.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="warteliste" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Sichere dir deinen Platz
            </h2>
            <p className="text-muted-foreground">
              Bereits über 120 Eltern stehen auf der Liste. Trag dich jetzt unverbindlich ein, bevor die Warteliste schließt.
            </p>

            {/* Trust-Badge / Social Proof */}
            <div className="flex items-center justify-center gap-2 mt-4 mb-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs font-bold text-primary">
                  S
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary">
                  T
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background flex items-center justify-center text-xs font-bold text-primary">
                  J
                </div>
              </div>
              <span className="text-sm font-medium text-primary">120+ Eltern warten bereits</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-2xl shadow-card space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Dein Vorname (z.B. Sarah)"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  setErrors((prev) => ({ ...prev, name: "" }));
                }}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="deine.email@adresse.de"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="plz">PLZ / Stadtteil</Label>
              <Input
                id="plz"
                placeholder="12099 oder Tempelhof"
                value={formData.plz}
                onChange={(e) => {
                  setFormData({ ...formData, plz: e.target.value });
                  setErrors((prev) => ({ ...prev, plz: "" }));
                }}
                className={errors.plz ? "border-destructive" : ""}
              />
              {errors.plz && (
                <p className="text-sm text-destructive">{errors.plz}</p>
              )}
            </div>

            <div className="space-y-3">
              <Label>Interesse an</Label>
              <div className="grid grid-cols-2 gap-3">
                {interestOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary/50 cursor-pointer transition-colors"
                  >
                    <Checkbox
                      checked={formData.interests.includes(option.id)}
                      onCheckedChange={(checked) =>
                        handleInterestChange(option.id, checked as boolean)
                      }
                    />
                    <span className="text-sm font-medium text-foreground">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.interests && (
                <p className="text-sm text-destructive">{errors.interests}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Wird eingetragen..." : "Jetzt Platz auf der Warteliste sichern"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Deine Daten werden vertraulich behandelt und nur für die Kontaktaufnahme verwendet.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistForm;
