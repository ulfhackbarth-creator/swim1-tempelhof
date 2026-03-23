export function HeroWave({ fillColor = "#f2f6f8" }: { fillColor?: string }) {
  return (
    <div className="absolute bottom-[-2px] left-0 w-full z-20 overflow-visible">
      <svg
        width="100%"
        height="80"
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block"
      >
        <path
          d="M0,40 C240,10 480,60 720,35 C960,10 1200,50 1440,40 L1440,80 L0,80 Z"
          fill={fillColor}
          fillOpacity="1"
        />
      </svg>
    </div>
  );
}

export default HeroWave;
