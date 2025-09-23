import React from "react";

function Footer() {
  return (
    <div className="w-full mt-20 flex flex-col items-center relative">
      {/* Upper Links */}
      <div className="w-[90%] flex flex-wrap justify-around gap-6">
        <div className="w-[130px] flex flex-col gap-4">
          <h1 className="font-bold text-[20px]">Company</h1>
          <ul className="flex flex-col gap-2 list-none">
            <li>Blog</li>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Our Stores</li>
            <li>Franchise Enquiry</li>
          </ul>
        </div>
        <div className="w-[130px] flex flex-col gap-4">
          <h1 className="font-bold text-[20px]">Quick Links</h1>
          <ul className="flex flex-col gap-2 list-none">
            <li>Category</li>
            <li>Collection</li>
            <li>Offers</li>
            <li>Corporate Gifting</li>
            <li>Jewelry Guide</li>
          </ul>
        </div>
        <div className="w-[140px] flex flex-col gap-4">
          <h1 className="font-bold text-[20px]">Legal</h1>
          <ul className="flex flex-col gap-2 list-none">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Customer Support</li>
            <li>Franchise Enquiry</li>
            <li>Our Certifications</li>
          </ul>
        </div>
        <div className="w-[140px] flex flex-col gap-4">
          <h1 className="font-bold text-[20px]">Order</h1>
          <ul className="flex flex-col gap-2 list-none">
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Cancellation Policy</li>
            <li>Track Order</li>
            <li>Check Order Status</li>
          </ul>
        </div>
        <div className="w-[254px] flex flex-col gap-4">
          <h1 className="font-bold text-[20px]">Contact</h1>
          <ul className="flex flex-col gap-2 list-none">
            <li>
              Lillian Jewelers Pvt. Ltd. 56 W, Broadway Street, Park Avenue, San
              Jose, California - 056
            </li>
            <li>+1 (226) 152-4722</li>
            <li>+315 652 415 452</li>
            <li>info@lillianjewelers.com</li>
          </ul>
        </div>
      </div>

      {/* Input & Payment */}
      <div className="w-[90%] flex flex-col lg:flex-row justify-around gap-6 mt-12">
        {/* Subscribe Input */}
        <div className="w-full lg:w-[30%] relative flex flex-col">
          <span className="underline text-center lg:text-left">
            Subscribe for our daily Offers & News later
          </span>
          <div className="relative mt-2">
            <input
              type="text"
              className="border-2 w-full rounded-[15px] placeholder-black placeholder-opacity-100 py-[10px] px-4 border-black"
              placeholder="Enter your email..."
            />
            <button
              className="py-[6px] px-4 rounded-[10px] bg-black text-white
                w-full mt-2
                sm:mt-2 sm:w-full
                lg:w-auto lg:absolute lg:right-3 lg:top-4 lg:-translate-y-1/2"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col gap-4 items-center lg:items-start">
          <span className="underline text-center lg:text-left">
            We accept the following payment options
          </span>
          <ul className="flex flex-wrap w-full items-center justify-around gap-2 list-none">
            {[...Array(8)].map((_, i) => (
              <li key={i}>
                <img src={`./fotl/fotl (${8 - i}).png`} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] mt-10 relative">
        <div className="flex items-center gap-2">
          <img src="./ll/ll (6).png" alt="" />
          <span>Lillian Jewelers.2024</span>
        </div>
        <ul className="flex gap-4 mt-4 lg:mt-0 list-none">
          {[...Array(5)].map((_, i) => (
            <li key={i}>
              <img src={`./ll/ll (${5 - i}).png`} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
