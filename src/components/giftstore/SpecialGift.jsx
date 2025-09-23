import React, { useRef, useLayoutEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SpecialGift() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // GSAP timeline with ScrollTrigger for entire section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      },
    });

    // Section fade + scale
    tl.fromTo(
      section,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    // Text fade + slide up
    tl.fromTo(
      section.querySelector(".text-part"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "-=0.8"
    );

    // Image fade + slide from right
    tl.fromTo(
      section.querySelector(".image-part"),
      { opacity: 0, x: 80 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
      "-=1"
    );

    return () => tl.scrollTrigger && tl.scrollTrigger.kill();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full px-6 md:px-10 mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-10"
    >
      {/* Text Section */}
      <div className="text-part h-auto flex flex-col justify-around w-full md:w-[481px] text-center md:text-left max-w-xl">
        <h1 className="text-[#008FAB] text-[48px] sm:text-4xl md:text-5xl lg:text-6xl font-[Nunito Sans]">
          A special gift for your loved ones.
        </h1>
        <p className="mt-4 text-gray-700 text-center md:text-left text-base sm:text-sm md:text-lg leading-relaxed">
          Give the gift of adornment and celebrate special moments with our
          exquisite collection
        </p>

        <div className="relative mt-4 w-full md:w-full">
          <input
            type="text"
            className="border-2 w-full rounded-[15px] placeholder-black placeholder-opacity-100 py-[10px] px-4 border-[#008FAB]"
            placeholder="Enter your email..."
          />
          <button
            className="py-[6px] px-4 rounded-[10px] bg-[#008FAB] text-white
                w-full mt-2
                sm:mt-2 sm:w-full
                lg:w-auto lg:absolute lg:right-3 lg:top-4 lg:-translate-y-1/2"
          >
            Subscribe
          </button>
        </div>

        <div className="w-full flex justify-around mt-4">
          <div className="w-[150px] h-auto gap-2 list-none flex items-center">
            <li className="text-[#008FAB] text-[36px]">1000+</li>
            <div>
              <p className="text-[12px]">Gifts</p>
              <p className="text-[12px]">Delivered</p>
            </div>
          </div>

          <img src="./gift/Line.png" alt="line" className="h-[40px]" />

          <div className="w-[150px] h-auto gap-2 list-none flex items-center">
            <li className="text-[#008FAB] text-[36px]">5000+</li>
            <div>
              <p className="text-[12px]">Happy</p>
              <p className="text-[12px]">Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="image-part w-full sm:w-[400px] md:w-[450px] lg:w-[500px]">
        <img
          src="./gift/sgift.png"
          alt="Our Story"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default SpecialGift;
