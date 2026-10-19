"use client";
import Link from "next/link";
import { SquarePen } from "lucide-react";
export default function Families() {
  return (
    <>
      <section className="w-full overflow-x-clip bg-[url('/assets/family_bg.webp')] bg-cover bg-no-repeat py-20 pt-40 md:pt-60 lg:pt-120 px-12 lg:h-350">
        <p className="text-center text-[16px] uppercase tracking-widest text-[#C99333] font-cormorant-garamond md:text-2xl">
          With Love
        </p>
        <h2 className="mt-4 text-center text-[42px] leading-tight text-[#8c1034] font-great-vibes md:text-4xl lg:text-[60px]">
          The Families
        </h2>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-[420px] aspect-[247/178] bg-[url('/assets/frame.webp')] bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center">
            <p className="text-center text-[12px] uppercase tracking-[0.15em] text-[#C99333] font-cormorant-garamond">
              Groom's Family
            </p>

            <h2 className="mt-2 text-center text-[32px] leading-none text-[#8c1034] font-great-vibes md:text-[38px]">
              Gandhi Family
            </h2>
          </div>
        </div>

        <div className="w-full flex justify-center my-3">
          <div className="w-full max-w-[420px] aspect-[247/178] bg-[url('/assets/frame.webp')] bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center">
            <p className="text-center text-[12px] uppercase tracking-[0.15em] text-[#C99333] font-cormorant-garamond">
              Bride's Family
            </p>

            <h2 className="mt-2 text-center text-[32px] leading-none text-[#8c1034] font-great-vibes md:text-[38px]">
              Narang Family
            </h2>
          </div>
        </div>
      </section>
      <section className="w-full overflow-x-clip bg-[#fddfc9] bg-cover bg-no-repeat py-20 pt-20 md:pt-60 lg:pt-20 px-4 lg:h-150">
        <div className="mx-auto w-full max-w-[500px] aspect-[247/188] bg-[url('/assets/rsvp_2.webp')] bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center">
          <h2 className="text-center text-[32px] leading-tight text-[#8c1034] font-great-vibes   md:text-4xl lg:text-[60px]">
            RSVP
          </h2>

          <p className="text-center text-[14px] text-[#C99333] font-cormorant-garamond">
            We would be delighted to have you <br /> with us on our special day.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfUg-USA4m0VUm6fe6M5pi4I8DIf7bACOYoa4Q9bIKE0xDNyg/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-1
  w-full max-w-[170px] min-h-[6px] px-8 mt-2 md:max-w-[270px]
  rounded-full border-[2px] border-[#e8c477]
  bg-gradient-to-b from-[#b87925] via-[#92500f] to-[#683509]
  text-[#fffaf0] shadow-[0_4px_10px_rgba(112,65,14,0.35)]
  transition-all duration-300 hover:brightness-110"
          >
            {/* Apna RSVP icon yahan rakho */}
            <SquarePen size={18} className="text-[#fffaf0] shrink-0" />
            <span className="md:h-12 h-8.5 w-px bg-[#e8d2a7]/80" />

            <span className="font-serif text-[12px] sm:text-xl whitespace-nowrap">
              Send Your RSVP
            </span>

            <span className="text-[12px] transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
