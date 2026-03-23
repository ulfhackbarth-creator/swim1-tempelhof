import React, { useId, useRef, useState, useEffect } from "react";

const DIVIDER_HEIGHT = 60;

function generateWavePath(sectionHeight: number, dividerHeight: number, numWaves = 3): string {
  const totalHeight = sectionHeight + dividerHeight;
  const wr = dividerHeight / totalHeight;
  const mid = wr / 2;
  const periodW = 1 / numWaves;
  let d = `M0,${mid}`;
  for (let i = 0; i < numWaves; i++) {
    const x = i * periodW;
    d += ` C${x + periodW * 0.25},0 ${x + periodW * 0.75},0 ${x + periodW * 0.5},${mid}`;
    d += ` C${x + periodW * 0.75 + periodW * 0.5},${wr} ${x + periodW * 1.25},${wr} ${x + periodW},${mid}`;
  }
  d += ` L1,1 L0,1 Z`;
  return d;
}

interface WaveSectionProps {
  children: React.ReactNode;
  background: string;
  /** true = hat Wellen-Divider am oberen Rand */
  hasDivider?: boolean;
  /** z-index: MUSS für jede Sektion höher sein als die vorherige! */
  zIndex: number;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  sectionRef?: React.Ref<HTMLElement>;
}

export function WaveSection({ children, background, hasDivider = false, zIndex, id, className, style, sectionRef: externalRef }: WaveSectionProps) {
  const uid = useId().replace(/:/g, "");
  const clipId = `wave-${uid}`;
  const internalRef = useRef<HTMLElement>(null);
  const ref = (externalRef as React.RefObject<HTMLElement>) || internalRef;
  const [wavePath, setWavePath] = useState("");

  useEffect(() => {
    const el = (ref as React.RefObject<HTMLElement>).current;
    if (!hasDivider || !el) return;
    const updatePath = () => {
      const height = el.getBoundingClientRect().height;
      setWavePath(generateWavePath(height, DIVIDER_HEIGHT, 3));
    };
    updatePath();
    const observer = new ResizeObserver(updatePath);
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasDivider, ref]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={className}
      style={{ position: "relative", overflow: "visible", background, zIndex, ...style }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>

      {hasDivider && wavePath && (
        <>
          <div
            className="section-border"
            style={{
              position: "absolute",
              top: `-${DIVIDER_HEIGHT}px`,
              bottom: 0,
              left: 0,
              right: 0,
              background,
              clipPath: `url(#${clipId})`,
            }}
          />
          <div
            className="section-divider-display"
            style={{
              position: "absolute",
              top: `-${DIVIDER_HEIGHT}px`,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 999,
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            <svg
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible", display: "block" }}
              aria-hidden="true"
            >
              <defs>
                <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                  <path d={wavePath} />
                </clipPath>
              </defs>
            </svg>
          </div>
        </>
      )}
    </section>
  );
}

export default WaveSection;
