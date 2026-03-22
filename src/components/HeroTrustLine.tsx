import { Star } from "lucide-react";

const HeroTrustLine = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-1.5 mt-5 ${className}`}>
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-current text-[#F59E0B]" />
      ))}
    </div>
    <span className="text-xs text-white/70 font-medium">Über 4,9 Sterne von glücklichen Eltern & Schwimmern</span>
  </div>
);

export default HeroTrustLine;
