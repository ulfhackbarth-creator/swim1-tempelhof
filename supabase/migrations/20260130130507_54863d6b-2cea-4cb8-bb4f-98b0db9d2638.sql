-- Create waitlist table for storing form submissions
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  plz TEXT NOT NULL,
  interests TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add unique constraint on email to prevent duplicates
ALTER TABLE public.waitlist ADD CONSTRAINT waitlist_email_unique UNIQUE (email);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into waitlist (public form)
CREATE POLICY "Anyone can submit to waitlist"
ON public.waitlist
FOR INSERT
WITH CHECK (true);

-- Only allow reading for authenticated admins (future use)
-- For now, no SELECT policy means no one can read the data from the frontend
