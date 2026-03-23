interface SectionDividerProps {
  fill: string;
  height?: number;
}

export function SectionDivider({ fill, height = 50 }: SectionDividerProps) {
  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        display: 'block',
        marginBottom: '-2px',
      }}
    >
      <svg
        viewBox="0 0 1440 50"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: `${height}px` }}
      >
        <path
          d="M0,25 C200,42 400,8 600,25 C800,42 1000,8 1200,25 C1320,33 1380,30 1440,25 L1440,50 L0,50 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default SectionDivider;
