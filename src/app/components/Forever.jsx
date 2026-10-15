
"use client";

import { useEffect, useRef, useState } from "react";
import Couple from "@/app/components/Couple";

function Reveal({ from = "bottom", className = "", children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const hidden =
    from === "top" ? "-translate-y-full" : "translate-y-full";

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
          show ? "translate-y-0 opacity-100" : `${hidden} opacity-0`
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Forever() {
  return (
    <div className="relative isolate flex flex-col items-center justify-center overflow-hidden bg-[url('/assets/forever_bg.webp')] bg-cover bg-center bg-no-repeat">

  {/* Background image - sabse peeche */}
  <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/assets/forever_bg.webp')] bg-cover bg-center bg-no-repeat" />

  {/* Text - background ke upar */}
  <div className="relative z-10 flex flex-col items-center rounded-2xl px-6 md:mt-60 mt-20 lg:px-20 lg:py-12">
    <p className="text-center font-cormorant-garamond text-[16px] uppercase tracking-widest text-[#C99333] md:text-2xl">
      Our Story
    </p>

    <h2 className="mt-4 text-center font-great-vibes text-[42px] leading-tight text-[#8c1034] md:text-4xl lg:text-[60px]">
      Forever Us
    </h2>

    <div className="flex flex-col items-center justify-center">
      <h2 className="mt-4 w-60 md:w-90 rounded-full border border-[#C99333] bg-[#F5E3C0] px-2 py-1.5 lg:px-20 text-center font-cormorant-garamond text-[12px] uppercase tracking-widest text-[#8c1034] md:text-xl lg:w-auto lg:text-[26px]">
        A Lifetime of Moments
      </h2>
    </div>
  </div>
<Couple className="absolute z-100"/>
  
  <Reveal from="bottom" className="relative -mt-245 md:-mt-390 w-full">
    <img
      src="/assets/forever_bg3.png"
      alt="Wedding decoration"
      className="block w-full"
    />
  </Reveal>

</div>
  );
}
