interface SectionDividerProps {
  fromColor: string;
  toColor?: string;
}

const SectionDivider = ({ fromColor, toColor = "#0f172a" }: SectionDividerProps) => (
  <div className="w-full relative -mt-px" style={{ backgroundColor: toColor }}>
    <svg
      width="100%"
      height="40"
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      {/* Extended background rect to prevent sub-pixel gaps */}
      <rect x="0" y="0" width="1440" height="2" fill={fromColor} />
      <polygon points="0,0 960,40 1440,0" fill={fromColor} />
      <polyline
        points="0,0 960,40 1440,0"
        fill="none"
        stroke="#C6FF00"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default SectionDivider;
