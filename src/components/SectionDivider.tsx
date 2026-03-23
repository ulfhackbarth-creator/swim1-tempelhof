interface SectionDividerProps {
  fromColor: string;
  toColor?: string;
}

const SectionDivider = ({ fromColor, toColor = "#0f172a" }: SectionDividerProps) => (
  <div className="w-full relative" style={{ backgroundColor: toColor, marginTop: '-2px' }}>
    <svg
      width="100%"
      height="40"
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      <rect x="0" y="0" width="1440" height="2" fill={fromColor} />
      <polygon points="0,0 960,40 1440,0 1440,40 0,40" fill={toColor} />
      <polygon points="0,0 960,40 1440,0 1440,3 960,43 0,3" fill="#C6FF00" />
    </svg>
  </div>
);

export default SectionDivider;
