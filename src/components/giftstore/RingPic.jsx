import React, { useRef, useLayoutEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RingPic() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    // Mobile / Tablet screens
    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        heroRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      );

      return () => tl.scrollTrigger && tl.scrollTrigger.kill();
    });

    // Large screens (LG and above)
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%", // thoda pehle animation start
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        heroRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      );

      return () => tl.scrollTrigger && tl.scrollTrigger.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="mt-[80px] w-full relative h-[426px] lg:h-[426px]"
    >
      <img
        className="w-full h-full object-cover"
        src="./gift/micon (2).png"
        alt="Ring"
      />
      <div
        ref={textRef}
        className="
          absolute top-[35%] right-[8%] lg:w-[596px] lg:h-[90px] lg:top-[35%] lg:right-[8%]
          w-[90%] sm:w-[85%] md:w-[80%]
          h-auto flex flex-col items-center justify-around
          sm:top-[30%] md:top-[32%]
          mx-auto
        "
      >
        <h1 className="w-full text-center text-[45px] sm:text-[32px] md:text-[36px] lg:text-[45px]">
          Still not sure what to buy?
        </h1>
        <button className="flex w-fit mx-auto md:mx-0 mt-6 px-4 py-2 rounded-lg hover:bg-[#9fd6d1] transition-all duration-300 justify-center gap-3 items-center">
          Talk to an Expert <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default RingPic;
