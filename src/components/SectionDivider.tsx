interface SectionDividerProps {
  fromColor: string;
  toColor?: string;
}

const SectionDivider = ({ fromColor, toColor = "#0f172a" }: SectionDividerProps) => (
  <div className="w-full relative" style={{ backgroundColor: toColor, marginTop: -3 }}>
    <svg
      width="100%"
      height="40"
      viewBox="0 -4 1440 44"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      <polygon points="0,-4 960,40 1440,-4" fill={fromColor} />
      <polyline
        points="0,-4 960,40 1440,-4"
        fill="none"
        stroke="#C6FF00"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default SectionDivider;
