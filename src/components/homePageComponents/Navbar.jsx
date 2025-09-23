import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FiUser, FiShoppingBag } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBag } from "../Redux/BagSlice";

function Navbar() {
  const [activePath, setActivePath] = useState(window.location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const bagItems = useSelector((state) => state.bag.items);

  const toggleBag = (item) => {
    console.log("item");
    console.log(item);
    const inBag = bagItems.find((b) => b.des === item.des);
    console.log("in bag");
    console.log(inBag);
    if (inBag) {
      dispatch(removeFromBag(item));
    } else {
      dispatch(addToBag(item));
    }
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Category", path: "#category" },
    { name: "Collections", path: "#collection" },
    { name: "Shop", path: "/shop" },
    { name: "Offers", path: "#offer" },
    { name: "Gift Store", path: "/giftstore" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[70px] z-50 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 lg:px-20 relative">
          <div className="flex items-center">
            <a href="/">
              <img
                src="./lo.png"
                alt="Logo"
                className="h-[40px] sm:h-[40px] md:h-[45px] lg:h-[50px]"
              />
            </a>
          </div>

          <ul className="hidden lg:flex justify-center items-center gap-6 w-full lg:w-[779px] text-center absolute left-1/2 transform -translate-x-1/2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={() => setActivePath(link.path)}
                  className={`relative px-1 py-1 transition-colors duration-300 ${
                    activePath === link.path
                      ? "text-[#C8041C] underline underline-offset-4"
                      : "text-gray-800 hover:text-[#C8041C]"
                  }
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 ml-auto relative">
            <a href="#" className="text-gray-800 hover:text-[#C8041C]">
              <IoSearch size={20} />
            </a>

            <a
              href="/login"
              onClick={() => setActivePath("/login")}
              className={`relative px-1 py-1 transition-colors duration-300 ${
                activePath === "/login"
                  ? "text-[#C8041C] underline underline-offset-4"
                  : "text-gray-800 hover:text-[#C8041C]"
              }
              `}
            >
              <FiUser size={20} />
            </a>

            <button
              onClick={() => {
                setFavOpen(!favOpen);
                setBagOpen(false);
              }}
              className={`relative transition-colors duration-300 ${
                favOpen ? "text-red-500" : "text-gray-800"
              }`}
            >
              <MdFavoriteBorder size={20} />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  {favorites.length}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setBagOpen(!bagOpen);
                setFavOpen(false);
              }}
              className={`relative transition-colors duration-300 ${
                bagOpen ? "text-red-500" : "text-gray-800"
              }`}
            >
              <FiShoppingBag size={20} />
              {bagItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  {bagItems.length}
                </span>
              )}
            </button>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-[#C8041C] transition-colors duration-300"
              >
                {isOpen ? (
                  <HiOutlineX size={28} />
                ) : (
                  <HiOutlineMenu size={28} />
                )}
              </button>
            </div>
          </div>

          {favOpen && (
            <div className="absolute right-0 top-12 w-72 bg-white border shadow-lg rounded-lg p-4 z-50">
              <h3 className="font-bold mb-2">My Favorites</h3>
              {favorites.length === 0 ? (
                <p className="text-sm text-gray-500">No favorites yet</p>
              ) : (
                <ul className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                  {favorites.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 border-b pb-2"
                    >
                      <img
                        src={item.pic}
                        alt={item.des}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="text-sm font-medium">{item.des}</p>
                        <p className="text-xs text-gray-500">${item.price}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {bagOpen && (
            <div className="absolute right-0 top-12 w-80 bg-white border shadow-lg rounded-lg p-4 z-50">
              <h3 className="font-bold mb-3 text-lg">👜 My Bag</h3>
              {bagItems.length === 0 ? (
                <p className="text-sm text-gray-500">Your bag is empty</p>
              ) : (
                <ul className="space-y-4 max-h-[320px] overflow-y-auto pr-2">
                  {bagItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-start border rounded-lg p-3 shadow-sm hover:shadow-md transition"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <img
                          src={item.pic}
                          alt={item.des}
                          className="w-14 h-14 object-cover rounded-md border"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.des}</p>
                          <p className="text-xs text-gray-500">${item.price}</p>
                        </div>
                      </div>

                      <button
                        className="mt-3 w-full bg-red-500 text-white text-sm py-2 rounded-lg shadow hover:bg-red-600 transition"
                        onClick={() => toggleBag(item)}
                      >
                        REmove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={() => {
                    setActivePath(link.path);
                    setIsOpen(false);
                  }}
                  className={`relative px-2 py-1 text-lg transition-colors duration-300 ${
                    activePath === link.path
                      ? "text-[#C8041C] underline underline-offset-4"
                      : "text-gray-800 hover:text-[#C8041C]"
                  }
                  `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="h-[80px] sm:h-[100px] md:h-[80px] lg:h-[80px]" />
    </>
  );
}

export default Navbar;
