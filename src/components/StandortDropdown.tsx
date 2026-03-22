import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { standorte } from "@/data/standorteData";

interface StandortDropdownProps {
  /** Query params appended to route, e.g. "?course=seepferdchen" */
  queryParams?: string;
  /** Visual variant */
  variant?: "orange" | "orange-large" | "ghost-header";
  /** Label override */
  label?: string;
  /** Alignment of dropdown */
  align?: "start" | "end" | "center";
}

const StandortDropdown = ({
  queryParams = "",
  variant = "orange",
  label = "Standort wählen",
  align = "end",
}: StandortDropdownProps) => {
  const isLarge = variant === "orange-large";
  const isGhostHeader = variant === "ghost-header";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={`inline-flex items-center gap-2 rounded-full transition-all active:scale-[0.97] ${
            isGhostHeader
              ? `border border-white/50 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  isOpen
                    ? "bg-white text-[#003580]"
                    : "bg-transparent text-white/80 hover:bg-white/10 hover:text-white"
                }`
              : isLarge
                ? "px-6 py-3.5 text-base shadow-lg font-bold text-[#0F2D52] bg-[#C6FF00] hover:bg-[#B0E000]"
                : "px-5 py-2 text-sm font-bold text-[#0F2D52] bg-[#C6FF00] hover:bg-[#B0E000]"
          }`}
          style={isLarge ? { boxShadow: "0 8px 24px -4px rgba(198,255,0,0.35)" } : undefined}
        >
          {label}
          {isLarge ? (
            <MapPin className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        sideOffset={10}
        className="w-72 rounded-2xl border-border/50 bg-card p-1.5 shadow-2xl"
      >
        <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider px-3 py-2">
          Unsere Standorte
        </DropdownMenuLabel>
        {standorte.map((s) => (
          <DropdownMenuItem
            key={s.route}
            asChild
            className="cursor-pointer rounded-xl px-3 py-3 focus:bg-primary/5 focus:text-primary"
          >
            <Link
              to={`${s.route}${queryParams}`}
              onClick={() => window.scrollTo({ top: 0 })}
              className="flex items-center gap-3 w-full"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[#1B4F8A]" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-semibold text-sm">{s.name}</span>
                <span className="text-xs text-muted-foreground truncate">{s.center}</span>
              </div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StandortDropdown;
