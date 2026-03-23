/**
 * Reusable section dividers for smooth visual transitions.
 *
 * WaveDivider  – soft wave(s), ideal below the hero.
 * ChevronDivider – two lines meeting at a point, ideal on dark sections.
 */

interface DividerProps {
  /** Tailwind color class applied to the SVG fill / stroke. Defaults vary per component. */
  className?: string;
  /** Flip vertically so the shape points upward instead of downward. */
  flip?: boolean;
}

/* ─── Wave Divider ─── */

export const WaveDivider = ({ className = "text-white", flip = false }: DividerProps) => (
  <div className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block w-full h-[40px] md:h-[60px] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
        fill="currentColor"
      />
      <path
        d="M0,52 C280,72 560,20 840,48 C1120,76 1320,24 1440,52 L1440,80 L0,80 Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  </div>
);

/* ─── Chevron Divider ─── */

export const ChevronDivider = ({ className = "text-accent", flip = false }: DividerProps) => (
  <div className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
    <svg
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      className={`block w-full h-[24px] md:h-[36px] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,0 L720,28 L1440,0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M0,6 L720,34 L1440,6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  </div>
);
