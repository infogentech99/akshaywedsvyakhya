
"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(true);

  // Show loading image for 1 second
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  // Lock page scroll while intro is visible
  useEffect(() => {
    if (!show) return;

    const scrollY = window.scrollY;
    const body = document.body;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";

      window.scrollTo(0, scrollY);
    };
  }, [show]);

  const playVideo = async () => {
    const video = videoRef.current;

    if (!video || started) return;

    try {
      video.currentTime = 0;
      await video.play();
      setStarted(true);
    } catch (error) {
      console.error("Video playback failed:", error);
    }
  };

  const handleEnd = () => {
    setHide(true);

    window.setTimeout(() => {
      setShow(false);
    }, 700);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] overflow-hidden transition-opacity duration-700 ${
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        width: "100%",
        height: "100dvh",
        backgroundColor: "#faf4e8",
      }}
    >
      {/* First image: visible for 1 second */}
      {loading && (
        <div
          className="absolute inset-0 z-30"
          style={{
            backgroundImage: "url('/assets/first-poster.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Poster image: shown after 1 second */}
      {!loading && !started && (
        <button
          type="button"
          onClick={playVideo}
          aria-label="Play intro video"
          className="absolute inset-0 z-20 h-full w-full cursor-pointer border-0 p-0"
          style={{
            backgroundImage: "url('/assets/hero-poster.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Intro video */}
      <video
        ref={videoRef}
        playsInline
        muted
        preload="auto"
        onEnded={handleEnd}
        className={`absolute inset-0 h-full w-full object-cover object-center ${
          started ? "z-10" : "z-0"
        }`}
        style={{
          backgroundColor: "#faf4e8",
        }}
      >
        <source src="/assets/hero_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
