/**
 * WAVE-SECTION-DIVIDER
 *
 * Two styles:
 *   'smooth' → gentle sine wave
 *   'sharp'  → pointed triangle teeth
 *
 * Rules:
 *   - Hero has NO divider (divider={null} or omit)
 *   - zIndex MUST be ascending for each section!
 */
import { useId, useRef, useEffect, useState } from 'react';

const DIVIDER_HEIGHT = 60;

function smoothWavePath(sectionHeight: number, divH: number, numWaves = 3): string {
  const total = sectionHeight + divH;
  const wr = divH / total;
  const mid = wr / 2;
  const pw = 1 / numWaves;
  let d = `M0,${mid}`;
  for (let i = 0; i < numWaves; i++) {
    const x = i * pw;
    d += ` C${x + pw * 0.25},0 ${x + pw * 0.75},0 ${x + pw * 0.5},${mid}`;
    d += ` C${x + pw * 1.25},${wr} ${x + pw * 1.75},${wr} ${x + pw},${mid}`;
  }
  return d + ` L1,1 L0,1 Z`;
}

function sharpWavePath(sectionHeight: number, divH: number, numTeeth = 5): string {
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
  /** Divider style at the top edge (null = no divider, e.g. Hero) */
  divider?: 'smooth' | 'sharp' | null;
  /** Must be ascending for each section! */
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
        divider === 'smooth'
          ? smoothWavePath(h, DIVIDER_HEIGHT, 3)
          : sharpWavePath(h, DIVIDER_HEIGHT, 5);
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
