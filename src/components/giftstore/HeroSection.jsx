import React, { useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";

function HeroSection() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Hero Image fade + scale
      tl.fromTo(
        heroRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2 }
      );

      // Overlay text fade + slide up
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=0.8"
      );
    }
  }, []);

  return (
    <div className="mt-7 w-full relative h-[426px] lg:h-[426px]" ref={heroRef}>
      <img
        className="w-full h-full object-cover"
        src="./gift/micon (3).png"
        alt="Hero"
      />

      <div
        ref={textRef}
        className="
          absolute
          top-[15%] right-[10%] 
          lg:w-[496px] lg:h-[208px]
          w-[90%] sm:w-[80%] md:w-[70%] 
          h-auto flex flex-col items-center justify-between
          sm:top-[12%] md:top-[13%]
          mx-auto
        "
      >
        <h1 className="text-[#C8041C] text-[60px] sm:text-[50px] md:text-[65px] lg:text-[80px] text-center lg:text-left">
          Gifting Guide
        </h1>
        <p className="text-center lg:text-center font-italiana text-[14px] sm:text-[13px] md:text-[14px] w-full lg:w-[441px]">
          Whether marking traditional milestones or celebrating new reasons to
          revel, we have a gift for every occasion.
        </p>
        <button className="flex w-fit mx-auto md:mx-0 mt-6 px-4 py-2 rounded-lg hover:bg-[#9fd6d1] transition-all duration-300 justify-center gap-3 items-center">
          Read me <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
