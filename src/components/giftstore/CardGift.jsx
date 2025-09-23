import React, { useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CardGift() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%", // start animation when component enters viewport
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      // Hero image fade + scale
      tl.fromTo(
        heroRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );

      // Overlay text fade + slide up
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      );
    }
  }, []);

  return (
    <div
      className="mt-[80px] w-full relative h-[426px] lg:h-[426px]"
      ref={heroRef}
    >
      <img
        className="w-full h-full object-cover"
        src="./gift/micon (1).png"
        alt="Gift Card"
      />

      <div
        ref={textRef}
        className="
          absolute top-[25%] right-[10%] lg:w-[496px] lg:h-[189px] lg:top-[25%] lg:right-[10%]
          w-[90%] sm:w-[85%] md:w-[80%] 
          h-auto flex flex-col items-center justify-center
          sm:top-[20%] md:top-[22%]
          mx-auto
        "
      >
        <h1 className="text-[#E8B95B] relative text-center lg:text-center text-[35px] sm:text-[28px] md:text-[32px] lg:text-[45px] w-full">
          Lillian Gift Card
          <span className="absolute left-[27%] sm:left-[36%] md:left-[37%] lg:left-[120px] bottom-2 w-[47%] sm:w-[28%] md:w-[25%] lg:w-[260px] h-[1px] bg-[#E8B95B]"></span>
        </h1>
        <p className="text-center lg:text-left font-italiana text-[14px] sm:text-[13px] md:text-[14px] lg:text-[15px] h-auto w-full sm:w-[90%] md:w-[95%] lg:w-[500px] mt-2">
          Unlock elegance and choice with our jewelry gift card. Whether it’s a
          sparkling necklace, a pair of timeless earrings, or a statement ring,
          this card lets your loved ones explore and select their perfect piece.
        </p>
        <button className="flex w-fit mx-auto md:mx-0 mt-6 px-4 py-2 rounded-lg hover:bg-[#9fd6d1] transition-all duration-300 justify-center gap-3 items-center">
          Read me <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default CardGift;
