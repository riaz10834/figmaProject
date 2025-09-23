import React from "react";
import PicSection from "../components/shopPagecomponents/PicSection";
import FilterSection from "../components/shopPagecomponents/FilterSection";
import Products from "../components/shopPagecomponents/Products";
import LastPic from "../components/shopPagecomponents/LastPic";

function Shop() {
  return (
    <>
      <PicSection />
      <FilterSection />
      <Products />
      <LastPic />
    </>
  );
}

export default Shop;
