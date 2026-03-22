import { useState, useEffect, useRef, useCallback } from "react";

interface HeroVideoBackgroundProps {
  /** Desktop video(s) – single or array for rotation */
  videos: string[];
  /** Mobile video(s) – falls back to desktop if not provided */
  mobileVideos?: string[];
  intervalMs?: number;
  /** Poster image for desktop */
  poster?: string;
  /** Poster image for mobile (falls back to desktop poster) */
  mobilePoster?: string;
}

/** Single-slot or rotating video player */
const VideoSlot = ({
  videos,
  poster,
  intervalMs = 4000,
  className,
}: {
  videos: string[];
  poster?: string;
  intervalMs?: number;
  className?: string;
}) => {
  const [slot, setSlot] = useState<"A" | "B">("A");
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);
  const slotRef = useRef<"A" | "B">("A");
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const getRef = (s: "A" | "B") => (s === "A" ? videoRefA : videoRefB);

  const playVideo = useCallback((el: HTMLVideoElement) => {
    const attempt = () =>
      el.play().catch(() => {
        setTimeout(() => el.play().catch(() => {}), 200);
      });
    if (el.readyState >= 3) {
      attempt();
    } else {
      el.addEventListener("canplay", () => attempt(), { once: true });
    }
  }, []);

  const loadIntoSlot = useCallback(
    (src: string, targetSlot: "A" | "B", show: boolean) => {
      const el = getRef(targetSlot).current;
      if (!el) return;
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
    },
    [playVideo]
  );

  useEffect(() => {
    indexRef.current = 0;
    slotRef.current = "A";
    setSlot("A");
    const elB = videoRefB.current;
    if (elB) {
      elB.pause();
      elB.removeAttribute("src");
      elB.load();
    }
    loadIntoSlot(videos[0], "A", true);
  }, [videos, loadIntoSlot]);

  useEffect(() => {
    if (videos.length <= 1) return;
    timerRef.current = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % videos.length;
      indexRef.current = nextIndex;
      const nextSlot = slotRef.current === "A" ? "B" : "A";
      const outgoing = getRef(slotRef.current).current;
      setTimeout(() => outgoing?.pause(), 1600);
      loadIntoSlot(videos[nextIndex], nextSlot, true);
    }, intervalMs);
    return () => clearInterval(timerRef.current);
  }, [videos, intervalMs, loadIntoSlot]);

  const baseClass = `absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${className ?? ""}`;

  return (
    <>
      <video
        ref={videoRefA}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        className={baseClass}
        style={{ opacity: slot === "A" ? 1 : 0 }}
      />
      <video
        ref={videoRefB}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        className={baseClass}
        style={{ opacity: slot === "B" ? 1 : 0 }}
      />
    </>
  );
};

const HeroVideoBackground = ({
  videos,
  mobileVideos,
  intervalMs = 4000,
  poster,
  mobilePoster,
}: HeroVideoBackgroundProps) => {
  const mobileVids = mobileVideos && mobileVideos.length > 0 ? mobileVideos : videos;
  const mPoster = mobilePoster || poster;

  return (
    <>
      {/* Desktop */}
      <VideoSlot
        videos={videos}
        poster={poster}
        intervalMs={intervalMs}
        className="hidden md:block"
      />
      {/* Mobile */}
      <VideoSlot
        videos={mobileVids}
        poster={mPoster}
        intervalMs={intervalMs}
        className="md:hidden"
      />
    </>
  );
};

export default HeroVideoBackground;
