ALTER TABLE public.waitlist DROP CONSTRAINT IF EXISTS waitlist_email_unique;
ALTER TABLE public.waitlist ADD CONSTRAINT waitlist_email_city_unique UNIQUE (email, city);