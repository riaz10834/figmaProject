import React, { useEffect, useRef } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../Redux/FavoriteSlice";
import { addToBag, removeFromBag } from "../Redux/BagSlice";

gsap.registerPlugin(ScrollTrigger);

function ProductsPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const bag = useSelector((state) => state.bag.items);

  const products = [
    {
      pic: "./shop/shop (21).png",
      des: "Rosy Refresh - Set of 2 Couple Wedding 24K Rose Gold Ring",
      price: 599,
      strike: 699,
      off: 100,
    },
    {
      pic: "./shop/shop (20).png",
      des: "Arabian Style 18K Rose Gold Plated Hand Bracelet ",
      price: 1249,
      strike: 1399,
      off: 150,
    },
    {
      pic: "./shop/shop (19).png",
      des: "European Zircon Limited Edition 18K Gold Bracelet",
      price: 1099,
      strike: 1199,
      off: 100,
    },
    {
      pic: "./shop/shop (18).png",
      des: "Kundan Designer Piece 24K Yellow Gold Plated Bangles & Bracelet Set",
      price: 2499,
      strike: 2649,
      off: 150,
    },
    {
      pic: "./shop/shop (17).png",
      des: "Rosy Refresh - Set of 2 18K Rose & White Gold Earrings",
      price: 2599,
      strike: 2699,
      off: 100,
    },
    {
      pic: "./shop/shop (16).png",
      des: "24K Yellow Gold Plated Summer Collection Finger Rings for Couple Set",
      price: 3249,
      strike: 4049,
      off: 50,
    },
    {
      pic: "./shop/shop (15).png",
      des: "White Cubic Emerald Designer Collection Earing Set",
      price: 2599,
      strike: 2799,
      off: 200,
    },
    {
      pic: "./shop/shop (14).png",
      des: "Indian Designer 14K Yellow Gold Plated Neckwear Set",
      price: 1599,
      strike: 1749,
      off: 150,
    },
    {
      pic: "./shop/shop (13).png",
      des: "Golden Hour - 14K Yellow Gold Designer made Bracelet",
      price: 2599,
      strike: 2699,
      off: 100,
    },
    {
      pic: "./shop/shop (12).png",
      des: "Golden Hour - 14K Yellow Gold Designer Earrings",
      price: 1849,
      strike: 1899,
      off: 50,
    },
    {
      pic: "./shop/shop (11).png",
      des: "Dazzling Delights Lillian 18K Rose Gold Neckwear",
      price: 4999,
      strike: 4199,
      off: 200,
    },
    {
      pic: "./shop/shop (10).png",
      des: "Whimsical Wonders 24K Yellow Gold Ear Cuffs",
      price: 2199,
      strike: 2249,
      off: 50,
    },
    {
      pic: "./shop/shop (9).png",
      des: "Oceanic Opulence Lillian 22K Rose Gold Earrings & Neckwear",
      price: 3599,
      strike: 3699,
      off: 100,
    },
    {
      pic: "./shop/shop (8).png",
      des: "Mystic Allure 12K Rose Gold Neckwear",
      price: 1249,
      strike: 1299,
      off: 50,
    },
    {
      pic: "./shop/shop (7).png",
      des: "Glimmering Dreams 24K Solid Gold Couple Rings - Festive Collections",
      price: 5999,
      strike: 6199,
      off: 200,
    },
    {
      pic: "./shop/shop (6).png",
      des: "Bohemian Bliss 12K Yellow Gold Fall Collection Bracelet",
      price: 1099,
      strike: 1249,
      off: 150,
    },
    {
      pic: "./shop/shop (5).png",
      des: "Vintage Vibes Lillian Designer Limited Edition 24K Solid Gold Neckwear",
      price: 8599,
      strike: 8699,
      off: 100,
    },
    {
      pic: "./shop/shop (4).png",
      des: "24K Solid Gold Chain - Timeless Treasures Collection",
      price: 3249,
      strike: 3299,
      off: 50,
    },
    {
      pic: "./shop/shop (3).png",
      des: "Lillian 22K Yellow Gold Chain - Golden Hour Collection",
      price: 4999,
      strike: 4799,
      off: 200,
    },
    {
      pic: "./shop/shop (2).png",
      des: "Bohemian Bliss 12K Yellow Gold Fall Collection Bracelet",
      price: 1099,
      strike: 1249,
      off: 150,
    },
  ];

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
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            end: "top 45%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const toggleFavorite = (item) => {
    const isFav = favorites.find((f) => f.des === item.des);
    if (isFav) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  const toggleBag = (item) => {
    const inBag = bag.find((b) => b.des === item.des);
    if (inBag) {
      dispatch(removeFromBag(item));
    } else {
      dispatch(addToBag(item));
    }
  };

  return (
    <>
      <div className="w-full px-5 mx-auto mt-20 mb-16">
        <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((num, i) => {
            const isFav = favorites.find((f) => f.des === num.des);
            const inBag = bag.find((b) => b.des === num.des);
            return (
              <div
                key={i}
                ref={(el) => (boxRefs.current[i] = el)}
                className="flex flex-col gap-3 border rounded-xl shadow-md p-3 hover:shadow-lg transition"
              >
                <img
                  src={num.pic}
                  alt={num.des}
                  className="w-full h-56 object-cover rounded-md"
                />
                <p className="font-medium">{num.des}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <p className="font-bold text-xl">${num.price}</p>
                    <p className="line-through text-gray-500">${num.strike}</p>
                    <p className="text-red-500 text-sm">({num.off} off)</p>
                  </div>
                  <div className="flex gap-4 text-lg cursor-pointer">
                    <span onClick={() => toggleFavorite(num)}>
                      {isFav ? (
                        <MdFavorite className="text-red-500" />
                      ) : (
                        <MdFavoriteBorder />
                      )}
                    </span>
                    <span onClick={() => toggleBag(num)}>
                      {inBag ? (
                        <FiShoppingBag className="text-green-600" />
                      ) : (
                        <FiShoppingBag />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative text-center w-[80%] h-[3px] bg-black mx-auto mt-12">
          <button className="absolute left-1/2 -translate-x-1/2 -top-4 border-white border-[6px] w-[140px] rounded-xl p-2 bg-[#B5EBE6]">
            View More
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
