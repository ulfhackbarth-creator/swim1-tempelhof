export function HeroWave({ fillColor = "#f2f6f8" }: { fillColor?: string }) {
  return (
    <div className="absolute bottom-[-2px] left-0 w-full z-20 overflow-visible">
      <style>{`
        .sw1-wave-a {
          animation: sw1AnimA 6s ease-in-out infinite;
        }
        @keyframes sw1AnimA {
          0%   { d: path("M0,40 C240,10 480,60 720,35 C960,10 1200,50 1440,40 L1440,80 L0,80 Z"); }
          50%  { d: path("M0,40 C240,60 480,15 720,45 C960,70 1200,25 1440,40 L1440,80 L0,80 Z"); }
          100% { d: path("M0,40 C240,10 480,60 720,35 C960,10 1200,50 1440,40 L1440,80 L0,80 Z"); }
        }
      `}</style>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,10 480,60 720,35 C960,10 1200,50 1440,40 L1440,80 L0,80 Z"
          fill={fillColor}
          fillOpacity="1"
          className="sw1-wave-a"
        />
      </svg>
    </div>
  );
}

export default HeroWave;
