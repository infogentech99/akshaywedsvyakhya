"use client";

import { useEffect, useRef, useState } from "react";
import Couple from "./Couple";

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
        className={`transition-all duration-1000 ease-out ${
          show
            ? "translate-y-0 opacity-100"
            : `${hidden} opacity-0`
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Forever() {
  return (
    <section className="relative isolate flex min-h-[200vw] flex-col items-center overflow-hidden md:min-h-[1200px]">

      {/* Background: full image visible on mobile */}
      <img
        src="/assets/forever_bg_n.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill"
      />

      {/* Text content */}
      <div className="relative z-10 mt-20 flex w-full flex-col items-center px-4 md:mt-60 md:px-10 lg:py-12">

        <p className="text-center font-cormorant-garamond text-[16px] uppercase tracking-widest text-[#C99333] md:text-2xl">
          Our Story
        </p>

        <h2 className="mt-4 text-center font-cormorant-upright font-semibold text-[42px] leading-tight text-[#8c1034] md:text-4xl lg:text-[60px] ">
          Forever Us
        </h2>

        <h2 className="mt-4 w-fit max-w-full rounded-full border border-[#C99333] bg-[#F5E3C0] px-4 py-2 text-center font-cormorant-garamond text-[12px] uppercase tracking-widest text-[#8c1034] md:px-8 md:text-xl lg:px-12 lg:text-[26px]">
          A Lifetime of Moments
        </h2>
      </div>

      {/* Couple image */}
      <Couple className="relative z-10 mt-16 w-full border-0 md:mt-20" />

    </section>
  );
}