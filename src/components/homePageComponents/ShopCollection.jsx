import React, { useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ShopCollection({ title }) {
  const collectionRefs = useRef([]);

  useEffect(() => {
    collectionRefs.current.forEach((item, i) => {
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
          delay: i * 0.15,
        }
      );
    });
  }, []);

  return (
    <div
      id={title}
      className="w-[98%]  mx-auto mt-[100px] flex flex-col items-center"
    >
      {/* Heading */}
      <div>
        <h1 className="text-center text-[#008FAB] text-[30px]">
          Shop By Collection
        </h1>
        <img src="./line.png" alt="" />
      </div>

      {/* Items */}
      <ul
        className="
          w-full mt-10
          grid 
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
          gap-y-8 sm:gap-y-10 md:gap-y-12
          gap-x-4 sm:gap-x-6 md:gap-x-8
        "
      >
        {[
          { img: "./col/col (4).png", title: "Festivals of Diamonds" },
          { img: "./col/col (3).png", title: "Tales of Mystique" },
          { img: "./col/col (2).png", title: "Joy of Dressing" },
          { img: "./col/col (1).png", title: "Pretty in Pink" },
        ].map((col, i) => (
          <li
            key={i}
            ref={(el) => (collectionRefs.current[i] = el)}
            className="flex flex-col justify-center gap-2 items-center list-none"
          >
            <img src={col.img} alt={col.title} />
            <h2 className="text-[20px] sm:text-[22px] md:text-[25px] text-[#832729] text-center">
              {col.title}
            </h2>
            <button className="flex w-[100px] justify-center gap-[10px] items-center">
              Explore <FaChevronRight />
            </button>
          </li>
        ))}
      </ul>

      {/* Footer Button */}
      <div className="relative text-center w-[80%] h-[3px] bg-black mt-[50px]">
        <button className="absolute left-1/2 -translate-x-1/2 -top-5 border-white border-[15px] w-[140px] rounded-[20px] p-2 bg-[#B5EBE6]">
          View More
        </button>
      </div>
    </div>
  );
}

export default ShopCollection;
