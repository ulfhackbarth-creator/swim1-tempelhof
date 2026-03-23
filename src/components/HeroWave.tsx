export function HeroWave({ fillColor = "#f2f6f8" }: { fillColor?: string }) {
  return (
    <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden">
      <svg
        width="100%"
        height="80"
        viewBox="0 0 2880 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block"
      >
        <defs>
          <style>{`
            @keyframes swimWave1 {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes swimWave2 {
              0% { transform: translateX(-25%); }
              100% { transform: translateX(-75%); }
            }
            .swim-wave-1 {
              animation: swimWave1 9s linear infinite;
              transform-origin: left center;
            }
            .swim-wave-2 {
              animation: swimWave2 13s linear infinite;
              transform-origin: left center;
            }
          `}</style>
        </defs>
        <path
          className="swim-wave-2"
          d="M0,50 C200,28 400,68 600,46 C800,24 1000,62 1200,44 C1400,26 1600,64 1800,46 C2000,28 2200,66 2400,48 C2600,30 2750,58 2880,50 L2880,80 L0,80 Z"
          fill={fillColor}
          fillOpacity="0.5"
        />
        <path
          className="swim-wave-1"
          d="M0,44 C180,22 360,64 540,42 C720,20 900,60 1080,40 C1260,20 1440,58 1620,40 C1800,22 1980,62 2160,42 C2340,22 2520,60 2700,42 C2790,32 2840,52 2880,44 L2880,80 L0,80 Z"
          fill={fillColor}
          fillOpacity="1"
        />
      </svg>
    </div>
  );
}

export default HeroWave;
