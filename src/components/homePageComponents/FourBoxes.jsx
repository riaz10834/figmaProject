import React, { useEffect, useRef } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FourBoxes() {
  const boxRefs = useRef([]);

  useEffect(() => {
    boxRefs.current.forEach((box, i) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
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
    <div className="w-full px-5 mx-auto mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[4, 3, 2, 1].map((num, i) => (
          <div
            key={i}
            ref={(el) => (boxRefs.current[i] = el)}
            className="flex flex-col gap-3"
          >
            <img
              src={`./fb (${num}).png`}
              alt=""
              className="w-full h-auto object-cover"
            />
            <p>Rosy Refresh - Set of 2 Emerald Diamond Rose Gold Ring</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <p className="font-bold text-xl">$599</p>
                <p className="line-through">$699</p>
                <p className="text-red-500">($100 off)</p>
              </div>
              <div className="flex gap-4 text-lg">
                <MdFavoriteBorder />
                <SlLock />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative text-center w-[80%] h-[3px] bg-black mx-auto mt-12">
        <button className="absolute left-1/2 -translate-x-1/2 -top-4 border-white border-[6px] w-[140px] rounded-xl p-2 bg-[#B5EBE6]">
          View More
        </button>
      </div>
    </div>
  );
}

export default FourBoxes;
