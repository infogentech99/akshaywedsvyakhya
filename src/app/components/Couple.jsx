"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "/assets/couple_5.jpg",
  "/assets/couple_6.jpg",
  "/assets/couple_7.png",
  "/assets/couple_8.jpg",
 
  "/assets/couple_11.jpg",
  "/assets/couple_12.jpg",
  "/assets/couple_13.jpg",
   "/assets/couple_14.jpg",
];

const STICKY_TOP = 96;

export default function Couple() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const track = trackRef.current;
        if (!track) return;

        const rect = track.getBoundingClientRect();
        const total = track.offsetHeight - window.innerHeight;

        if (total <= 0) return;

        const scrolled = Math.max(0, Math.min(STICKY_TOP - rect.top, total));

        const progress = scrolled / total;

        const index = Math.min(
          images.length - 1,
          Math.floor(progress * images.length),
        );

        setCurrentIndex((prev) => (prev === index ? prev : index));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // 👇 Click pe next image
  const goNext = () => {
    setCurrentIndex((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      ref={trackRef}
      className="relative mt-16"
      style={{
        height: `${(images.length + 1) * 6}vh`,
      }}
    >
      <div
        className="sticky flex items-start justify-center"
        style={{ top: `${STICKY_TOP}px` }}
      >
        <div className="relative h-[420px] w-[300px] md:h-[520px] md:w-[380px]">
          {images.map((src, index) => {
            const offset = index - currentIndex;
            const previous = offset < 0;
            const isActive = offset === 0;

            return (
              <div
                key={src}
                // 👇 sirf active image pe click chalega
                onClick={isActive ? goNext : undefined}
                className={`absolute inset-0 ${
                  isActive ? "cursor-pointer" : ""
                }`}
                style={{
                  transform: previous
                    ? "translateY(-115%) rotate(-8deg) scale(0.92)"
                    : `translateY(${offset * 12}px) scale(${
                        1 - Math.min(offset * 0.025, 0.15)
                      }) rotate(${offset * 1.2}deg)`,
                  opacity: previous ? 0 : offset <= 2 ? 1 : 0,
                  zIndex: images.length - index,
                  transition:
                    "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 350ms ease",
                  // 👇 pointerEvents hata diya (ya "auto" kar diya) taaki click kaam kare
                  pointerEvents: isActive ? "auto" : "none",
                  visibility: Math.abs(offset) > 3 ? "hidden" : "visible",
                }}
              >
                <img
                  src={src}
                  alt={`Couple ${index + 1}`}
                  draggable={false}
                  className="h-7/8 md:h-full w-full rounded-2xl object-cover shadow-xl border-10"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
