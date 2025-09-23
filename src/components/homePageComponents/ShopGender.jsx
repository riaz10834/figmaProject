import React, { useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ShopGender({ title }) {
  const genderRefs = useRef([]);

  useEffect(() => {
    genderRefs.current.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 45%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <div
      id={title}
      className="w-[98%] mx-auto mt-[100px] flex flex-col items-center lg:h-[650px]"
    >
      {/* Heading */}
      <div>
        <h1 className="text-center text-[#008FAB] text-[30px]">
          Shop By Gender
        </h1>
        <img src="./line.png" alt="" />
      </div>

      {/* Items */}
      <div
        className="
          w-full mt-10 list-none
          sm:grid sm:grid-cols-1 sm:gap-8 sm:items-start
          md:grid md:grid-cols-2 md:gap-10 md:items-start
          lg:flex lg:justify-around lg:items-center lg:gap-0
        "
      >
        {[
          { img: "./gen/gen (3).png", title: "MEN" },
          { img: "./gen/gen (2).png", title: "KIDS" },
          { img: "./gen/gen (1).png", title: "WOMEN" },
        ].map((gen, i) => (
          <li
            key={i}
            ref={(el) => (genderRefs.current[i] = el)}
            className="flex flex-col justify-center gap-4 items-center"
          >
            <img
              src={gen.img}
              alt={gen.title}
              className="w-[250px] md:w-[280px] lg:w-auto h-auto object-contain"
            />
            <h2 className="text-[25px] text-[#832729]">{gen.title}</h2>
            <button className="flex w-[120px] justify-center gap-[10px] items-center">
              Explore <FaChevronRight />
            </button>
          </li>
        ))}
      </div>

      {/* Footer */}
      <div className="relative text-center mx-auto w-[80%] h-[3px] bg-black mt-[50px]">
        <button className="absolute left-1/2 -translate-x-1/2 -top-[25px] border-white border-[15px] w-[140px] rounded-[20px] p-2 bg-[#B5EBE6]">
          View More
        </button>
      </div>
    </div>
  );
}

export default ShopGender;
