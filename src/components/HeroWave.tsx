const HeroWave = ({ fillColor = "fill-[#f2f6f8]" }: { fillColor?: string }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none z-10 translate-y-[2px]">
    <svg
      className="relative block w-[calc(100%+1.3px)] h-[30px] md:h-[50px] lg:h-[70px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        className={fillColor}
        d="M0,0V73.81C216.51,135.53,491.43,142.3,760,102.6,928.32,77.7,1075.6,35.86,1200,0Z"
      />
    </svg>
  </div>
);

export default HeroWave;
