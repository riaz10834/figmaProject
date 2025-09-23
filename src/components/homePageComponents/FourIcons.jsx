import React, { useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FourIcons() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
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

  return (
    <div
      className="
        w-full px-2 mt-[50px] bg-[#F1F0F0]
        sm:grid sm:grid-cols-1 sm:gap-8 sm:py-8
        md:grid md:grid-cols-2 md:gap-10 md:py-10
        lg:flex lg:justify-center lg:items-center lg:gap-12 lg:h-[300px]
      "
    >
      {/* 1st Card */}
      <div
        ref={(el) => (cardRefs.current[0] = el)}
        className="w-full sm:w-full md:w-full lg:w-[330px] h-[191px] flex flex-col justify-center gap-3 items-center"
      >
        <div className="flex flex-col justify-center items-center">
          <img src="./ficons/ficon (4).png" alt="" />
          <h2 className="text-[17px] font-bold">
            Complementary Shipping & Return
          </h2>
        </div>
        <p className="w-full text-center">
          We offer complementary shipping and returns on all orders.
        </p>
        <button className="flex w-[115px] justify-center gap-[15px] items-center">
          Learn More <FaChevronRight />
        </button>
      </div>

      {/* 2nd Card */}
      <div
        ref={(el) => (cardRefs.current[1] = el)}
        className="w-full sm:w-full md:w-full lg:w-[351px] h-[191px] flex flex-col justify-center gap-3 items-center"
      >
        <div className="flex flex-col justify-center items-center">
          <img src="./ficons/ficon (3).png" alt="" />
          <h2 className="text-[17px] font-bold">Book an Appointment</h2>
        </div>
        <p className="w-full text-center">
          We’re happy to help with in-store or virtual appointments.
        </p>
        <button className="flex w-[115px] justify-center gap-[15px] items-center">
          Book Now <FaChevronRight />
        </button>
      </div>

      {/* 3rd Card */}
      <div
        ref={(el) => (cardRefs.current[2] = el)}
        className="w-full sm:w-full md:w-full lg:w-[351px] h-[191px] flex flex-col justify-center gap-3 items-center"
      >
        <div className="flex flex-col justify-center items-center">
          <img src="./ficons/ficon (2).png" alt="" />
          <h2 className="text-[17px] font-bold">At Your Service</h2>
        </div>
        <p className="w-full text-center">
          Our customer care experts are always here to help you.
        </p>
        <button className="flex w-[115px] justify-center gap-[15px] items-center">
          Contact Us <FaChevronRight />
        </button>
      </div>

      {/* 4th Card */}
      <div
        ref={(el) => (cardRefs.current[3] = el)}
        className="w-full sm:w-full md:w-full lg:w-[351px] h-[191px] flex flex-col justify-center gap-3 items-center"
      >
        <div className="flex flex-col justify-center items-center">
          <img src="./ficons/ficon (1).png" alt="" />
          <h2 className="text-[17px] font-bold">Payment Options</h2>
        </div>
        <p className="w-full text-center">
          Explore our flexible payment options designed to fit every budget.
        </p>
        <button className="flex w-[115px] justify-center gap-[15px] items-center">
          Learn More <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default FourIcons;
