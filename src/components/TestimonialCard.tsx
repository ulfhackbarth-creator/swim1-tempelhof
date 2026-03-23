import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  text: string;
  name: string;
  location: string;
  index: number;
  variant?: "light" | "dark";
  course?: string;
  stars?: number;
}

const getInitials = (name: string) => {
  const parts = name.replace(/\./g, "").trim().split(/\s+/);
  return parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : parts[0].slice(0, 2).toUpperCase();
};

const avatarColors = [
  "bg-blue-100 text-blue-800",
  "bg-amber-100 text-amber-800",
  "bg-emerald-100 text-emerald-800",
  "bg-rose-100 text-rose-800",
  "bg-violet-100 text-violet-800",
];

const TestimonialCard = ({ text, name, location, index, variant = "light", course, stars = 5 }: TestimonialCardProps) => {
  const initials = getInitials(name);
  const colorClass = avatarColors[index % avatarColors.length];

  if (variant === "dark") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        className="relative bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-[2rem] p-6 md:p-10 h-full flex flex-col overflow-hidden"
      >
        <Quote className="absolute top-5 right-5 w-12 h-12 text-white/[0.06]" strokeWidth={1} />
        <div className="flex gap-0.5 mb-5">
          {Array.from({ length: stars }).map((_, j) => (
            <Star key={j} className="w-4 h-4 fill-current text-[#F59E0B]" />
          ))}
        </div>
        <p className="text-lg text-white/90 font-medium leading-relaxed italic mb-8 flex-1">„{text}"</p>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center text-sm font-bold shrink-0`}>
            {initials}
          </div>
          <div>
            <p className="text-white font-bold text-sm">{name}</p>
            <p className="text-white/50 text-xs">{location}{course ? ` · ${course}` : ""}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative bg-white rounded-[2rem] p-6 md:p-10 shadow-lg shadow-slate-300/50 border-2 border-slate-200 h-full flex flex-col overflow-hidden"
    >
      <Quote className="absolute top-5 right-5 w-12 h-12 text-orange-100" strokeWidth={1} />
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: stars }).map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-current text-[#F59E0B]" />
        ))}
      </div>
      <p className="text-lg text-slate-700 font-medium leading-relaxed italic mb-8 flex-1">„{text}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center text-sm font-bold shrink-0`}>
          {initials}
        </div>
        <div>
          <p className="text-slate-900 font-bold text-sm">{name}</p>
          <p className="text-slate-500 text-xs">{location}{course ? ` · ${course}` : ""}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
