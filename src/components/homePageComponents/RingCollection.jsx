import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RingCollection() {
  const ringRef = useRef(null);

  useEffect(() => {
    if (ringRef.current) {
      gsap.fromTo(
        ringRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ringRef.current,
            start: "top 85%",
            end: "top 45%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="mt-[100px] flex justify-center">
      <img
        ref={ringRef}
        src="./ringpic.png"
        alt="Ring Collection"
        className="max-w-full h-auto"
      />
    </div>
  );
}

export default RingCollection;
