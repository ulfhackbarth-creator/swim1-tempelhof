import { useState, useEffect, useRef, useCallback } from "react";

interface HeroVideoBackgroundProps {
  videos: string[];
  intervalMs?: number;
}

const HeroVideoBackground = ({ videos, intervalMs = 4000 }: HeroVideoBackgroundProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedIndex, setLoadedIndex] = useState(0);
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  // Toggle between two video elements for crossfade
  const [slot, setSlot] = useState<"A" | "B">("A");

  const rotate = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  useEffect(() => {
    if (videos.length <= 1) return;
    const id = setInterval(rotate, intervalMs);
    return () => clearInterval(id);
  }, [rotate, intervalMs, videos.length]);

  // When activeIndex changes, load the new video into the inactive slot and crossfade
  useEffect(() => {
    const nextSlot = slot === "A" ? "B" : "A";
    const nextRef = nextSlot === "A" ? videoRefA : videoRefB;
    const el = nextRef.current;
    if (!el) return;

    el.src = videos[activeIndex];
    el.load();

    const onCanPlay = () => {
      el.play().catch(() => {});
      setSlot(nextSlot);
      setLoadedIndex(activeIndex);
    };

    el.addEventListener("canplay", onCanPlay, { once: true });
    return () => el.removeEventListener("canplay", onCanPlay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // Initial load
  useEffect(() => {
    const el = videoRefA.current;
    if (!el) return;
    el.src = videos[0];
    el.load();
    el.addEventListener("canplay", () => el.play().catch(() => {}), { once: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseClass = "absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out";

  return (
    <>
      <video
        ref={videoRefA}
        muted
        loop
        playsInline
        preload="none"
        className={baseClass}
        style={{ opacity: slot === "A" ? 1 : 0 }}
      />
      <video
        ref={videoRefB}
        muted
        loop
        playsInline
        preload="none"
        className={baseClass}
        style={{ opacity: slot === "B" ? 1 : 0 }}
      />
    </>
  );
};

export default HeroVideoBackground;
