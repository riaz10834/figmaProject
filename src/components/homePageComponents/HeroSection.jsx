import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function HeroSection() {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { scale: 0.8, opacity: 0 }, // start state
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="mt-[25px] overflow-hidden">
      <img
        ref={imgRef}
        src="./img.png"
        alt="Hero"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

export default HeroSection;
