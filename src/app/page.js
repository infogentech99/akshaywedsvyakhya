"use client";

import { useEffect, useState, useRef } from "react";

import Details from "./components/Details";
import Forever from "./components/Forever";
import Events from "./components/Events";
import Families from "./components/Families";
import RoseHeroTemp from "./components/RoseHeroTemp";

export default function Home() {
 const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch {}
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {}
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio
        ref={audioRef}
        src="/assets/akshay.mp3"
        loop
        preload="auto"
        playsInline
      />

      <div className="relative w-full overflow-hidden">
         <div className="pointer-events-none fixed inset-0 z-20 h-screen w-screen">
    <RoseHeroTemp />
  </div>
        <video
          src="/assets/golden.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="block w-full h-[950px] md:h-auto lg:h-auto object-cover"
        />

        <div className="absolute inset-x-0 top-20 md:top-20 lg:top-150 flex flex-col items-center text-center px-2">
          <p className="text-[#C99333] font-semibold tracking-widest text-[12px] md:text-[14px]">
            ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ॥
            <br />
            ਨਾਨਕ ਸਤਿਗੁਰ ਤਿਨ ਮਿਲਾਇਆ ਜਿਨਾਂ ਧੁਰੇ ਪਾਇਆ ਸੰਜੋਗ॥
          </p>

          <p className="text-[#634B00] tracking-wider text-[12px] md:text-[14px] mt-4 font-noto-serif">
            With the blessings of the Waheguru Ji
          </p>

          <h2 className=" flex flex-col items-center text-[#8c1034] text-[17px] md:text-2xl lg:text-[50px]">
            <span className="font-noto-serif">
              Late Surinder Singh Gandhi & Mrs. Mohinder Kaur Gandhi
            </span>
          </h2>

          <p className="text-[#634B00] tracking-wider text-[12px] md:text-[14px] mt-4 font-noto-serif w-90">
            cordially invite you to grace the Anand Karaj of their beloved
            children
          </p>
          <h2 className=" flex flex-col items-center text-[#C99333] text-3xl md:text-4xl lg:text-[70px] mt-3 font-bold">
            <span className="font-noto-serif">Akshay Gandhi <br/></span>
<span className="font-noto-serif text-[17px]">(S/O Mrs. Anju Gandhi)</span>
            <span className="font-noto-serif text-base md:text-2xl lg:text-[38px] text-[#634B00]">
              &
            </span>

            <span className="font-noto-serif">Vyakhya Narang</span>
            <span className="font-noto-serif text-[17px]">(D/O Mrs. Shikha & Mr. Gaurav Narang)</span>
          </h2>
          <p className="text-[#634B00] tracking-wider text-[12px] md:text-[14px] mt-4 font-noto-serif w-90">
            with your esteemed presence and blessings
          </p>
        </div>
        <Details />
        <Forever />
        <Events />
        <Families />
      </div>
    </>
  );
}
