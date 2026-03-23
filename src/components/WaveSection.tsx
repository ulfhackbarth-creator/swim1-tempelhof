/**
 * SWIM1 WAVE-SECTION-DIVIDER
 *
 * Styles:
 *   'organic' → Organic water waves
 *   'chevron' → Even triangle teeth
 *
 * Rules:
 *   - Hero has NO divider (divider={null} or omit)
 *   - zIndex MUST be ascending for each section!
 */
import { useId, useRef, useEffect, useState } from 'react';

const DIVIDER_HEIGHT = 80;

function organicWavePath(sectionHeight: number, divH: number): string {
  const total = sectionHeight + divH;
  const wr = divH / total;
  return [
    `M0,${wr}`,
    ` C0.08,${wr * 0.3} 0.18,0 0.28,${wr * 0.15}`,
    ` C0.38,${wr * 0.3} 0.42,${wr * 0.6} 0.52,${wr * 0.4}`,
    ` C0.62,${wr * 0.2} 0.68,0 0.78,${wr * 0.1}`,
    ` C0.88,${wr * 0.2} 0.94,${wr * 0.5} 1,${wr * 0.3}`,
    ` L1,1 L0,1 Z`,
  ].join('');
}

function chevronPath(sectionHeight: number, divH: number, numTeeth = 6): string {
  const total = sectionHeight + divH;
  const wr = divH / total;
  const pw = 1 / numTeeth;
  let d = `M0,${wr}`;
  for (let i = 0; i < numTeeth; i++) {
    const x = i * pw;
    d += ` L${x + pw * 0.5},0 L${x + pw},${wr}`;
  }
  return d + ` L1,1 L0,1 Z`;
}

interface WaveSectionProps {
  children: React.ReactNode;
  background: string;
  /** Divider style at top edge. null = no divider (Hero). */
  divider?: 'organic' | 'chevron' | null;
  /** MUST be ascending for each section! */
  zIndex: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export function WaveSection({
  children,
  background,
  divider = null,
  zIndex,
  className = '',
  style,
  id,
}: WaveSectionProps) {
  const rawId = useId();
  const clipId = `wave-${rawId.replace(/:/g, '')}`;
  const sectionRef = useRef<HTMLElement>(null);
  const [wavePath, setWavePath] = useState('');

  useEffect(() => {
    if (!divider || !sectionRef.current) return;
    const update = () => {
      const h = sectionRef.current!.getBoundingClientRect().height;
      const path =
        divider === 'organic'
          ? organicWavePath(h, DIVIDER_HEIGHT)
          : chevronPath(h, DIVIDER_HEIGHT, 6);
      setWavePath(path);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(sectionRef.current);
    return () => ro.disconnect();
  }, [divider]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={className}
      style={{ position: 'relative', overflow: 'visible', background, zIndex, ...style }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>

      {divider && wavePath && (
        <>
          <div
            style={{
              position: 'absolute',
              top: `-${DIVIDER_HEIGHT}px`,
              bottom: 0,
              left: 0,
              right: 0,
              background,
              clipPath: `url(#${clipId})`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: `-${DIVIDER_HEIGHT}px`,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 999,
              overflow: 'visible',
              pointerEvents: 'none',
            }}
          >
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'visible',
                display: 'block',
              }}
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
