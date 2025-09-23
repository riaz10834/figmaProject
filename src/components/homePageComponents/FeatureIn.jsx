import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeatureIn() {
  const logoRefs = useRef([]);

  useEffect(() => {
    logoRefs.current.forEach((logo, i) => {
      gsap.fromTo(
        logo,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: logo,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-[100px] flex flex-col items-center justify-center gap-[50px]">
      {/* Heading */}
      <div>
        <h1 className="text-center text-[#008FAB] text-[30px]">Featured In</h1>
        <img src="./line.png" alt="" />
      </div>

      {/* First Row */}
      <div
        className="
          w-[80%]
          flex flex-wrap justify-center gap-6
          sm:grid sm:grid-cols-2 sm:gap-6
          md:grid md:grid-cols-2 md:gap-8
          lg:flex lg:justify-between lg:gap-0
        "
      >
        {["logo (7).png", "logo (6).png", "logo (5).png", "logo (4).png"].map(
          (file, i) => (
            <img
              key={i}
              ref={(el) => (logoRefs.current[i] = el)}
              src={`./logo/${file}`}
              alt=""
              className="max-h-[60px] object-contain"
            />
          )
        )}
      </div>

      {/* Second Row */}
      <div
        className="
          w-[60%]
          flex flex-wrap justify-center gap-6
          sm:grid sm:grid-cols-2 sm:gap-6
          md:grid md:grid-cols-2 md:gap-8
          lg:flex lg:justify-between lg:gap-0
        "
      >
        {["logo (3).png", "logo (2).png", "logo (1).png"].map((file, i) => (
          <img
            key={i + 4}
            ref={(el) => (logoRefs.current[i + 4] = el)}
            src={`./logo/${file}`}
            alt=""
            className="max-h-[60px] object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureIn;
