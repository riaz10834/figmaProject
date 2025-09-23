import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Sale() {
  const saleRef = useRef(null);

  useEffect(() => {
    const el = saleRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.8, y: 100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="mt-8 overflow-hidden">
      <img
        ref={saleRef}
        src="./SALE.png"
        alt="Sale Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

export default Sale;
