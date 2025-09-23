import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SignUpCom() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      section,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    tl.fromTo(
      section.querySelector(".text-part"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "-=0.8"
    );

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
      className="w-full  md:px-10 mx-auto mt-[20px] flex flex-col md:flex-row justify-center  items-center  gap-[100px]"
    >
      <div className="text-part   h-[600px] flex flex-col items-center justify-between w-full md:w-[481px] text-center md:text-left max-w-xl">
        <h1 className="text-[#008FAB] w-[600px] text-center h-[79px] text-[50px] font-Nunito Sans font-[800] sm:text-[40px] md:text-[50px] lg:text-6xl font-[Nunito Sans]">
          Create an Account
        </h1>
        <p className=" lg:text-center w-[358px] h-[54px] text-[18px] md:text-left lg:mt-[-20px]  sm:text-sm md:text-lg ">
          Create an account to enjoy personalized shopping experience
        </p>

        <form>
          <div className=" mt-4 w-full flex flex-col gap-8 md:w-full">
            <div className="flex gap-3">
              <input
                type="text"
                className="border-[1px] w-full rounded-[15px] py-[15px] bg-[#FAFAFA] px-4 border-gray-400"
                placeholder="First Name..."
              />
              <input
                type="text"
                className="border-[1px] w-full rounded-[15px] py-[15px] bg-[#FAFAFA] px-4 border-gray-400"
                placeholder="Last Name..."
              />
            </div>
            <input
              type="text"
              className="border-[1px] w-full rounded-[15px]  py-[15px] bg-[#FAFAFA] px-4 border-gray-400"
              placeholder="Enter your email..."
            />
            <input
              type="text"
              className="border-[1px] w-full rounded-[15px]  py-[15px] bg-[#FAFAFA] px-4 border-gray-400"
              placeholder="Enter your password..."
            />
            <input
              type="text"
              className="border-[1px] w-full rounded-[15px]  py-[15px] bg-[#FAFAFA] px-4 border-gray-400"
              placeholder="Confirm your password..."
            />
          </div>

          <div className="w-full flex flex-col items-center gap-3 justify-around mt-4">
            <button className="w-[400px] h-[46px] bg-[#008FAB] text-white rounded-[10px]">
              Create Account
            </button>
            <p className="flex ">
              Already have an account?{" "}
              <span className="text-[#008FAB]">
                <a href="/login">Sign In </a>
              </span>
            </p>
          </div>
        </form>
      </div>

      <div className="image-part w-full  sm:w-[400px] md:w-[450px]  lg:w-[400px] lg:h-[500px]">
        <img
          src="./login/login (1).png"
          alt="Our Story"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default SignUpCom;
