import React, { useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OurStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      })
      .fromTo(
        el.querySelector(".text-part"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        el.querySelector(".image-part"),
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 1 },
        "<0.3"
      );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full px-6 md:px-10 mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-10"
    >
      <div className="text-part text-center md:text-left max-w-xl">
        <h1 className="text-[#008FAB] text-4xl md:text-6xl font-serif">
          Our Story
        </h1>
        <hr className="bg-yellow-500 h-[3px] w-20 mx-auto md:mx-0 mt-2" />

        <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
          Our story is one of passion, where every diamond is handpicked, every
          metal is ethereally shaped, and every design tells a unique story.
          It’s not just jewelry; it’s an heirloom that carries the legacy of
          beauty across generations.
        </p>

        <button className="flex w-fit mx-auto md:mx-0 mt-6 px-4 py-2 bg-[#B5EBE6] rounded-lg hover:bg-[#9fd6d1] transition-all duration-300 justify-center gap-3 items-center">
          Read me <FaChevronRight />
        </button>
      </div>

      <div className="image-part w-full md:w-[550px]">
        <img
          src="./mask (1).png"
          alt="Our Story"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default OurStory;
