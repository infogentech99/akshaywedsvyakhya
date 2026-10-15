import Image from "next/image";
import Details from "@/app/components/Details";
import Forever from "@/app/components/Forever";
import Events from "@/app/components/Events";
import Families from "@/app/components/Families"
export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <video
        src="/assets/golden.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="block w-full h-[950px] md:h-auto lg:h-auto object-cover"
      />

      <div className="absolute inset-x-0 top-20 md:top-20 lg:top-50 flex flex-col items-center text-center px-2">
        <p className="text-[#C99333] font-semibold tracking-widest text-[12px] md:text-[14px]">
          ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ॥
          <br />
          ਨਾਨਕ ਸਤਿਗੁਰ ਤਿਨ ਮਿਲਾਇਆ ਜਿਨਾਂ ਧੁਰੇ ਪਾਇਆ ਸੰਜੋਗ॥
        </p>

        <p className="text-[#634B00] tracking-wider text-[12px] md:text-[14px] mt-4 font-noto-serif">
          With the blessings of the Almighty
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
          <span className="font-noto-serif">Akshay Gandhi</span>

          <span className="font-noto-serif text-base md:text-2xl lg:text-[38px] text-[#634B00]">
            &
          </span>

          <span className="font-noto-serif">Vyakhya Narang</span>
        </h2>
        <p className="text-[#634B00] tracking-wider text-[12px] md:text-[14px] mt-4 font-noto-serif w-90">
          with your esteemed presence and blessings
        </p>
      </div>
      <Details/>
      <Forever/>
      <Events/>
      <Families/>
    </div>
  );
}
