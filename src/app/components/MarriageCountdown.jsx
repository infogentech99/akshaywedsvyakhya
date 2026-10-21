"use client";
import { useEffect, useState } from "react";


export default function MarriageCountdown() {
    const TARGET_DATE = new Date("2026-11-24").getTime();
  const [timeLeft, setTimeLeft] = useState({
  days: 14,
  hours: 12,
  minutes: 28,
  seconds: 0, 
});

useEffect(() => {
  const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
      (diff % (1000 * 60)) / 1000
    );

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  updateCountdown();

  // Update every second
  const interval = setInterval(updateCountdown, 1000);

  return () => clearInterval(interval);
}, []);

    return (
        <>
            <div className="bg-[url('/assets/bg_four.webp')] bg-cover bg-no-repeat">
               
                    <h2 className="text-[24px] md:text-4xl lg:text-[56px] text-center text-[#8c1034] pt-8 md:pt-11 lg:pt-10 3xl:pt-25 font-cormorant-upright font-semibold ">Our countdown to forever begins..</h2> 
                     
                    <div className="flex md:gap-12 gap-2 justify-center items-center mt-6">
                       <div className="border px-5 py-2 bg-[#F8F4EA] border-[#8c1034] rounded-md">
                         <h2 className="text-[26px] md:text-4xl lg:text-[52px] text-center text-[#8c1034] "> {timeLeft.days}</h2>
                          <h2 className="text-[10px] md:text-[14px] lg:text-[12px] text-center text-black  uppercase">Days </h2>
                       </div>
                        <div className="border px-5 py-2 bg-[#F8F4EA] border-[#8c1034] rounded-md">
                         <h2 className="text-[26px] md:text-4xl lg:text-[52px] text-center text-[#8c1034]"> {timeLeft.hours}</h2>
                          <h2 className="text-[10px] md:text-[14px] lg:text-[12px] text-center text-black uppercase">Hours</h2>
                       </div>
                       <div className="border px-5 py-2 bg-[#F8F4EA] border-[#8c1034] rounded-md">
                         <h2 className="text-[26px] md:text-4xl lg:text-[52px] text-center text-[#8c1034]"> {timeLeft.minutes}</h2>
                          <h2 className="text-[10px] md:text-[14px] lg:text-[12px] text-center text-black uppercase">Minutes</h2>
                       </div>
                       <div className="border px-5 py-2 bg-[#F8F4EA] border-[#8c1034] rounded-md">
                         <h2 className="text-[26px] md:text-4xl lg:text-[52px] text-center text-[#8c1034]">{timeLeft.seconds}</h2>
                          <h2 className="text-[10px] md:text-[14px] lg:text-[12px] text-center text-black uppercase">Seconds</h2>
                       </div>
                    </div>

                     <h2 className="text-[24px] md:text-4xl lg:text-[56px] text-center text-[#8c1034] pt-8 md:pt-11 lg:pt-10 3xl:pt-25 font-cormorant-upright font-semibold ">Save the date for the wedding festivities</h2>
            </div>
        </>
    );
} 