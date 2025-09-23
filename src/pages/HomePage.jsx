import React from "react";
import HeroSection from "../components/homePageComponents/HeroSection";
import OurStory from "../components/homePageComponents/OurStory";
import AboutUs from "../components/homePageComponents/AboutUs";
import FiveIcons from "../components/homePageComponents/FiveIcons";
import FourBoxes from "../components/homePageComponents/FourBoxes";
import Sale from "../components/homePageComponents/Sale";
import ShopCategory from "../components/homePageComponents/ShopCategory";
import ShopCollection from "../components/homePageComponents/ShopCollection";
import RingCollection from "../components/homePageComponents/RingCollection";
import ShopGender from "../components/homePageComponents/ShopGender";
import CustomerLove from "../components/homePageComponents/CustomerLove";
import FeatureIn from "../components/homePageComponents/FeatureIn";
import FourIcons from "../components/homePageComponents/FourIcons";

function HomePage() {
  const src1 = "./f (1).png";
  const src2 = "./f (2).png";
  const src3 = "./f (3).png";
  const src4 = "./f (4).png";
  const src5 = "./f (5).png";

  return (
    <>
      <HeroSection />
      <OurStory />
      <AboutUs />
      <div className="w-full flex justify-evenly items-center   h-[300px] bg-[#ccc] mt-[100px]">
        <FiveIcons src={src5} des="Shipping Worldwide" />
        <FiveIcons src={src4} des="Video Calling Assistance" />
        <FiveIcons src={src3} des="Celebrity Favorite" />
        <FiveIcons src={src2} des="Assured Warranty" />
        <FiveIcons src={src1} des="2500+ Unique Designs" />
      </div>
      <FourBoxes />
      <Sale />
      <ShopCategory title="category" />
      <ShopCollection title="collection" />
      <RingCollection />
      <ShopGender title="shop" />
      <CustomerLove title="offer" />
      <FeatureIn />
      <FourIcons />
    </>
  );
}

export default HomePage;
