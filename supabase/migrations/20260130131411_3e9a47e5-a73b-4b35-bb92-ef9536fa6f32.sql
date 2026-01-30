-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit to waitlist" ON public.waitlist;

-- No public INSERT policy needed - edge function uses service role key