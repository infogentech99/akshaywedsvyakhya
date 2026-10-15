"use client";
import { useState } from "react";
import ScratchText from "./ScratchText";
import MarriageCountdown from "../components/MarriageCountdown";
// import Events from "../components/Events";
// import Wardrobe from "../components/Wardrobe";
// import PhotoGallery from "../components/PhotoGallery";
// import Weather from "../components/Weather";
// import Venues from "../components/Venues";

export default function Details() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="mx-auto w-full text-center md:py-30 pt-15 pb-20 bg-[url('/assets/family_bg.webp')] bg-no-repeat bg-cover">
      <p className="text-[17px] md:text-2xl text-[#8c1034] font-cormorant-garamond mt-20">
        With immense joy and love
      </p>
      <div className="text-center">
        <h2 className="text-[#8c1034] font-great-vibes text-center mt-4 md:text-4xl text-[38px] lg:text-[60px] leading-tight">
          Akshay & Vyakhya
        </h2>

        <ScratchText onReveal={() => setRevealed(true)} />

        {revealed && (
          <div className="countdown-fade-in">
            <MarriageCountdown />
          </div>
        )}

        {/* <Events />
        <Wardrobe />
        <PhotoGallery />
        <Weather />
        <Venues /> */}
      </div>
    </div>
  );
}
