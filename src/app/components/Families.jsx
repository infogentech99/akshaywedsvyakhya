'use client';

export default function Families() {
  return (
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
  );
}
