import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FiveIcons({ src, des }) {
  const iconRef = useRef(null);

  useEffect(() => {
    const el = iconRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.4, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={iconRef}
      className="
        w-full 
        flex flex-col items-center justify-center 
        gap-2
        h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px]
      "
    >
      <img
        src={src}
        alt=""
        className="
          w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px] 
          h-auto
        "
      />

      <p className="w-[90px] sm:w-[100px] md:w-[110px] text-center text-sm sm:text-base md:text-lg">
        {des}
      </p>
    </div>
  );
}

export default FiveIcons;
