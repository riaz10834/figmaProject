import React, { useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";

function PicSection() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        heroRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2 }
      );

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=0.8"
      );
    }
  }, []);

  return (
    <div className="mt-7 w-full relative h-[426px] lg:h-[541px]" ref={heroRef}>
      <img
        className="w-full h-full object-cover"
        src="./shop/shop (22).png"
        alt="Hero"
      />

      <div
        ref={textRef}
        className="
          absolute
          lg:top-[150px] left-[4%] 
          lg:w-[496px] lg:h-[155px]
          w-[90%] sm:w-[80%] md:w-[70%] 
          h-auto flex flex-col items-center justify-center
          gap-[30px]
          top-[20%]
          sm:top-[12%] md:top-[13%]
          mx-auto
        "
      >
        <h1
          className="text-[25px] uppercase w-[500px]
         relative sm:text-[50px] md:text-[50px] lg:text-[33px]  text-center lg:w-[550px]"
        >
          Designer Bracelet Collection
          <span className="absolute left-[80px] lg:w-[460px] lg:left-10  bottom-1 w-[340px] h-[2px] bg-black"></span>
        </h1>
        <p className="text-center lg:text-center lg:h-[48px] font-italiana text-[12px] sm:text-[13px] md:text-[14px] w-full lg:w-[561px]">
          Our latest collection of designer bracelets, where artistry meets
          elegance. Each bracelet is a testament to exquisite craftsmanship,
          featuring unique designs that elevate any look. From bold statement
          pieces to delicate charms, our collection caters to every style and
          occasion.
        </p>
        <button className="flex w-fit mx-auto md:mx-0 mt-3 px-4 py-2 rounded-lg hover:bg-[#9fd6d1] transition-all duration-300 justify-center gap-3 items-center">
          Show Now <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default PicSection;
