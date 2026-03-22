import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquare, MapPin, HelpCircle, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import GlobalHeader from "@/components/home/GlobalHeader";
import HomeFooter from "@/components/home/HomeFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

const contactSchema = z.object({
  first_name: z.string().trim().min(1, "Vorname ist erforderlich").max(100),
  last_name: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse ein").max(255),
  subject: z.string().min(1, "Bitte wähle ein Thema aus"),
  message: z.string().trim().min(1, "Bitte gib eine Nachricht ein").max(5000),
  privacy: z.literal(true, { errorMap: () => ({ message: "Bitte stimme der Datenschutzerklärung zu" }) }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const subjectOptions = [
  "Allgemeine Frage",
  "Frage zu einem Standort",
  "Frage zu Kursen/Warteliste",
  "Feedback",
  "Sonstiges",
];

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      subject: "",
      message: "",
      privacy: false as unknown as true,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert({
        first_name: data.first_name,
        last_name: data.last_name || null,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      if (error) throw error;

      toast({
        title: "Nachricht gesendet ✓",
        description: "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei dir.",
      });
      form.reset();
    } catch {
      toast({
        title: "Fehler",
        description: "Hoppla, da ist etwas schiefgelaufen. Bitte versuche es später noch einmal oder schreibe uns eine E-Mail.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <GlobalHeader />

      {/* Hero */}
      <section className="bg-[#0C2D48] pt-28 pb-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Wir sind für dich da</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Du hast Fragen zu unseren Kursen oder Standorten? Wir helfen dir gerne weiter.
        </p>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Left – Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#0C2D48] mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-[#0C2D48] mb-1">E-Mail</h3>
                <a href="mailto:hallo@swim1.de" className="text-[#0C2D48] hover:underline">
                  hallo@swim1.de
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-[#0C2D48] mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-[#0C2D48] mb-1">Häufige Fragen</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Die häufigsten Fragen haben wir bereits auf unserer FAQ-Seite beantwortet.
                </p>
                <Link to="/faq" className="text-[#0C2D48] font-semibold hover:underline text-sm">
                  Zur FAQ-Seite →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#0C2D48] mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-[#0C2D48] mb-1">Standorte</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Wenn du dich für einen bestimmten Kurs anmelden möchtest, wähle bitte direkt deinen passenden Standort aus.
                </p>
                <Link to="/">
                  <Button
                    variant="outline"
                    className="border-[#0C2D48] text-[#0C2D48] hover:bg-[#0C2D48] hover:text-white transition-all"
                  >
                    Zu den Standorten
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right – Contact Form */}
          <div className="md:col-span-3">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-5 h-5 text-[#0C2D48]" />
                  <h2 className="text-xl font-bold text-[#0C2D48]">Lass uns sprechen</h2>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vorname *</FormLabel>
                            <FormControl>
                              <Input placeholder="Max" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="last_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nachname</FormLabel>
                            <FormControl>
                              <Input placeholder="Mustermann" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-Mail-Adresse *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="max@beispiel.de" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Betreff / Thema *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Bitte wählen..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {subjectOptions.map((opt) => (
                                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nachricht *</FormLabel>
                          <FormControl>
                            <Textarea rows={5} placeholder="Deine Nachricht..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="privacy"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="leading-none">
                            <FormLabel className="text-sm text-muted-foreground font-normal">
                              Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert und verarbeitet werden. Weitere Informationen findest du in unserer{" "}
                              <Link to="/datenschutz" className="underline text-[#0C2D48]">Datenschutzerklärung</Link>.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C6FF00] text-[#0C2D48] font-bold hover:bg-[#B0E000] hover:scale-105 active:scale-[0.97] transition-all"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin h-4 w-4 border-2 border-[#0C2D48] border-t-transparent rounded-full" />
                          Wird gesendet…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Nachricht senden
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default Kontakt;
