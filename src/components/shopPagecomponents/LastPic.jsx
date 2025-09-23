import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LastPic() {
  const headingRef = useRef(null);
  const imgRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
      }
    );

    // Image animation
    gsap.fromTo(
      imgRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
        },
      }
    );

    // Paragraph animation
    gsap.fromTo(
      paraRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full mt-[50px]">
      <img
        ref={imgRef}
        src="./shop/shop (1).png"
        className="w-full h-auto object-cover"
        alt="Winter Gemstone Collection"
      />

      <h1
        ref={headingRef}
        className="absolute top-[30px] left-1/2 -translate-x-1/2 text-center 
        font-Italiana text-xl sm:text-2xl md:text-3xl lg:text-[40px] uppercase"
      >
        Winter Gemstone Collection
      </h1>

      <p
        ref={paraRef}
        className="absolute bottom-[20px] left-1/2 -translate-x-1/2 text-center 
        max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:bottom-[8px] lg:max-w-[900px] 
        text-[10px] sm:text-[11px] md:text-[13px] lg:text-[11px] leading-relaxed"
      >
        Illuminate Your Style with Lillian Jewelers' Dazzling Gemstone
        Collection, designed to celebrate the beauty and individuality of every
        wearer. Each piece showcases vibrant, ethically sourced gemstones that
        add a splash of color and elegance to any outfit. Discover unique
        designs that reflect your personal style and let your inner sparkle
        shine. Visit us today to explore the magic of our new gemstone
        collection and find your next treasure!
      </p>
    </div>
  );
}

export default LastPic;
