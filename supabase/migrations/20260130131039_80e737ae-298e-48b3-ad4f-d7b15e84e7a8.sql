-- Prevent public reads on waitlist table - only backend/admin can access
CREATE POLICY "Prevent public reads"
ON public.waitlist
FOR SELECT
USING (false);