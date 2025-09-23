import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CustomerLove({ title }) {
  const cardRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    // Heading animation
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    }

    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 45%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  const customers = [
    {
      img: "./cm/cm (4).png",
      name: "Joseph - Australia",
      text: "“I love the designs which are original, beautiful, simple, universal and elegant.”",
    },
    {
      img: "./cm/cm (3).png",
      name: "Laura - France",
      text: "“Absolutely love the ring that Lillian made for me.”",
    },
    {
      img: "./cm/cm (2).png",
      name: "Sarrah - NY",
      text: "“I love Lillian's jewelry. It is so different to anything I can get in New York.”",
    },
    {
      img: "./cm/cm (1).png",
      name: "Maria - Russia",
      text: "“MAGIC! This is the first word that came to my mind when I opened my delivery.”",
    },
  ];

  return (
    <div
      id={title}
      className="w-[90%] mx-auto mt-[100px] flex flex-col items-center"
    >
      {/* Heading */}
      <div ref={headingRef} className="text-center mb-10">
        <h1 className="text-[#008FAB] text-[30px]">Customer Love</h1>
        <img src="./line.png" alt="" className="mx-auto mt-2" />
      </div>

      {/* Cards */}
      <div
        className="
          w-full list-none
          grid grid-cols-1 gap-8
          md:grid-cols-2 md:gap-10
          lg:flex lg:justify-between lg:items-stretch lg:gap-6
        "
      >
        {customers.map((cust, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="
              w-full sm:w-full md:w-[48%] lg:w-[23%]
              flex flex-col justify-between items-center
              p-6 border-8 rounded-[30px] border-[#B5EBE6] bg-white shadow-md
              min-h-[420px]
            "
          >
            <li className="flex flex-col flex-1 justify-between gap-3 items-center">
              <img src={cust.img} alt={cust.name} />
              <h2 className="text-[22px] sm:text-[25px] font-semibold text-center">
                {cust.name}
              </h2>
              <p className="text-center text-gray-600">{cust.text}</p>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerLove;
