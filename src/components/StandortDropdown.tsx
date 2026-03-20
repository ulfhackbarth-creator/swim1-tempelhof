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
  variant?: "orange" | "orange-large";
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`inline-flex items-center gap-2 rounded-full font-bold text-white transition-all bg-[#F97316] hover:bg-[#EA580C] active:scale-[0.97] ${
            isLarge
              ? "px-6 py-3.5 text-base shadow-lg"
              : "px-5 py-2 text-sm"
          }`}
          style={isLarge ? { boxShadow: "0 8px 24px -4px rgba(249,115,22,0.35)" } : undefined}
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
              <div className="flex flex-col">
                <span className="font-semibold text-sm">{s.name}</span>
                <span className="text-xs text-muted-foreground">{s.address}</span>
              </div>
              {s.status === "coming-soon" && (
                <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                  Bald
                </span>
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StandortDropdown;
