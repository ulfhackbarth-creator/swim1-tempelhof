import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen ein").max(100),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail ein").max(255),
  plz: z.string().trim().min(3, "Bitte gib deinen Stadtteil oder PLZ ein").max(50),
  interests: z.array(z.string()).min(1, "Bitte wähle mindestens ein Interesse"),
});

const interestOptions = [
  { id: "kinder", label: "Babyschwimmen / Eltern-Kind" },
  { id: "erwachsene", label: "Erwachsene" },
  { id: "aqua", label: "Aquafitness" },
  { id: "reha", label: "Reha" },
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
    
    toast({
      title: "Erfolgreich eingetragen!",
      description: "Du erhältst alle Neuigkeiten zuerst.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="warteliste" className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
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
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Auf die Warteliste
            </h2>
            <p className="text-muted-foreground">
              Sichere dir deinen Vorteil – unverbindlich und kostenlos.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-2xl shadow-card space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Max Mustermann"
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
                placeholder="max@beispiel.de"
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
              {isLoading ? "Wird eingetragen..." : "Unverbindlich vormerken"}
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
