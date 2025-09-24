import React, { useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ShopCategory({ title }) {
  const categoryRefs = useRef([]);

  useEffect(() => {
    categoryRefs.current.forEach((item, i) => {
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
      className="w-[98%] mx-auto mt-[100px] flex flex-col items-center"
    >
      <div>
        <h1 className="text-center text-[#008FAB] text-[30px]">
          Shop By Category
        </h1>
        <img src="./line.png" alt="" />
      </div>

      <div
        className="
          w-full mt-10 
          grid 
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
          gap-y-8 sm:gap-y-10 md:gap-y-12
          gap-x-4 sm:gap-x-6 md:gap-x-8
        "
      >
        {[
          { img: "./category/cat (10).png", title: "Earrings" },
          { img: "./category/cat (9).png", title: "Finger Rings" },
          { img: "./category/cat (8).png", title: "Pendants" },
          { img: "./category/cat (7).png", title: "Nose Pins" },
          { img: "./category/cat (6).png", title: "Chains" },
          { img: "./category/cat (5).png", title: "Bracelets" },
          { img: "./category/cat (4).png", title: "Bangles" },
          { img: "./category/cat (3).png", title: "Neckwear" },
          { img: "./category/cat (2).png", title: "Watch Jewelry" },
          { img: "./category/cat (1).png", title: "Ankle Wear" },
        ].map((cat, i) => (
          <li
            key={i}
            ref={(el) => (categoryRefs.current[i] = el)}
            className="flex flex-col justify-center gap-2 items-center list-none"
          >
            <img src={cat.img} alt={cat.title} />
            <h2 className="text-[25px] text-[#832729]">{cat.title}</h2>
            <button className="flex w-[80px] justify-center gap-[15px] items-center">
              Explore <FaChevronRight />
            </button>
          </li>
        ))}
      </div>

      <div className="footer text-center relative w-[80%] h-[3px] bg-black mt-[50px]">
        <button className="absolute left-1/2 -translate-x-1/2 -top-5 border-white border-[15px] w-[140px] rounded-[20px] p-2 bg-[#B5EBE6]">
          <a href="/shop">View More</a>
        </button>
      </div>
    </div>
  );
}

export default ShopCategory;
