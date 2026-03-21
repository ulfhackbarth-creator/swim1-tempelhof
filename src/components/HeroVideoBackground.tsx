import { useState, useEffect, useRef, useCallback } from "react";

interface HeroVideoBackgroundProps {
  videos: string[];
  intervalMs?: number;
  poster?: string;
}

const HeroVideoBackground = ({ videos, intervalMs = 4000, poster }: HeroVideoBackgroundProps) => {
  const [slot, setSlot] = useState<"A" | "B">("A");
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);
  const slotRef = useRef<"A" | "B">("A");
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const getRef = (s: "A" | "B") => (s === "A" ? videoRefA : videoRefB);

  const playVideo = useCallback((el: HTMLVideoElement) => {
    // Try play(), and if it rejects retry once after a short delay (mobile quirk)
    const attempt = () => el.play().catch(() => {
      setTimeout(() => el.play().catch(() => {}), 200);
    });

    if (el.readyState >= 3) {
      attempt();
    } else {
      el.addEventListener("canplay", () => attempt(), { once: true });
    }
  }, []);

  const loadIntoSlot = useCallback((src: string, targetSlot: "A" | "B", show: boolean) => {
    const el = getRef(targetSlot).current;
    if (!el) return;

    // Avoid reloading the same source
    if (el.currentSrc && el.currentSrc.endsWith(src.replace(/^\//, ""))) {
      if (show) {
        playVideo(el);
        slotRef.current = targetSlot;
        setSlot(targetSlot);
      }
      return;
    }

    el.src = src;
    el.load();

    if (show) {
      const onReady = () => {
        playVideo(el);
        slotRef.current = targetSlot;
        setSlot(targetSlot);
      };
      if (el.readyState >= 3) {
        onReady();
      } else {
        el.addEventListener("canplay", onReady, { once: true });
      }
    }
  }, [playVideo]);

  // Initial load & reset when videos prop changes (tab switch)
  useEffect(() => {
    indexRef.current = 0;
    slotRef.current = "A";
    setSlot("A");

    // Pause slot B
    const elB = videoRefB.current;
    if (elB) { elB.pause(); elB.removeAttribute("src"); elB.load(); }

    loadIntoSlot(videos[0], "A", true);
  }, [videos, loadIntoSlot]);

  // Rotation timer
  useEffect(() => {
    if (videos.length <= 1) return;

    timerRef.current = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % videos.length;
      indexRef.current = nextIndex;
      const nextSlot = slotRef.current === "A" ? "B" : "A";

      // Pause the outgoing video after crossfade
      const outgoing = getRef(slotRef.current).current;
      setTimeout(() => outgoing?.pause(), 1600);

      loadIntoSlot(videos[nextIndex], nextSlot, true);
    }, intervalMs);

    return () => clearInterval(timerRef.current);
  }, [videos, intervalMs, loadIntoSlot]);

  const baseClass = "absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out";

  return (
    <>
      <video
        ref={videoRefA}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
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
