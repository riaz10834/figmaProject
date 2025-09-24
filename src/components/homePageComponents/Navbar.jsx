import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBag } from "../Redux/BagSlice";
import { removeFavorite } from "../Redux/FavoriteSlice";
import { Link } from "react-router-dom";

function Navbar() {
  const [favOpen, setFavOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const favorites = useSelector((state) => state.favorites.items);
  const bagItems = useSelector((state) => state.bag.items);
  const dispatch = useDispatch();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-[70px]">
        {/* ✅ Logo (aapka original image) */}
        <a href="/">
          <img
            src="./lo.png"
            alt="Logo"
            className="h-[40px] sm:h-[40px] md:h-[45px] lg:h-[50px]"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-[#008FAB]">
            Home
          </Link>
          <Link to="/shop" className="hover:text-[#008FAB]">
            Category
          </Link>
          <Link to="/shop" className="hover:text-[#008FAB]">
            Collections
          </Link>
          <Link to="/shop" className="hover:text-[#008FAB]">
            Shop
          </Link>
          <Link to="/about" className="hover:text-[#008FAB]">
            Offers
          </Link>
          <Link to="/giftstore" className="hover:text-[#008FAB]">
            Gift Store
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <IoSearch size={22} className="cursor-pointer" />
          <FiUser size={22} className="cursor-pointer" />

          <div className="relative">
            <MdFavoriteBorder
              size={22}
              className="cursor-pointer"
              onClick={() => {
                setFavOpen(!favOpen);
                setBagOpen(false);
              }}
            />
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {favorites.length}
              </span>
            )}

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
                        className="flex items-center gap-3 border-b pb-2 justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.pic}
                            alt={item.des}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <p className="text-sm font-medium">{item.des}</p>
                            <div className="flex gap-2">
                              <p className="text-xs font-bold text-[15px] text-gray-500">
                                ${item.price}
                              </p>
                              <p className="text-xs text-gray-500">
                                ${item.strike}
                              </p>
                              <p className="text-xs text-gray-500">
                                ${item.off}
                              </p>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => dispatch(removeFavorite(item))}
                          className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  to="/favorites"
                  className="mt-3 block bg-[#008FAB] text-white rounded h-[30px] text-center leading-[30px]"
                >
                  View Favorites
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <SlLock
              size={22}
              className="cursor-pointer"
              onClick={() => {
                setBagOpen(!bagOpen);
                setFavOpen(false);
              }}
            />
            {bagItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1 rounded-full">
                {bagItems.length}
              </span>
            )}

            {bagOpen && (
              <div className="absolute right-0 flex flex-col top-12 w-80 bg-white border shadow-lg rounded-lg p-4 z-50">
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
                            <div className="flex gap-3">
                              <p className="text-xs font-bold">${item.price}</p>
                              <p className="text-xs line-through text-gray-500">
                                ${item.strike}
                              </p>
                              <p className="text-xs text-red-500">
                                ({item.off} off)
                              </p>
                            </div>
                          </div>
                        </div>
                        <button
                          className="mt-3 w-full bg-red-500 text-white text-sm py-2 rounded-lg shadow hover:bg-red-600 transition"
                          onClick={() => dispatch(removeFromBag(item))}
                        >
                          Remove From Bag
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  to="/wishlist"
                  className="bg-green-600 text-white rounded h-[35px] mt-3 flex justify-center items-center hover:bg-green-700 transition"
                >
                  Continue to Checkout
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden">
            {menuOpen ? (
              <HiOutlineX
                size={25}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <HiOutlineMenu
                size={25}
                onClick={() => setMenuOpen(true)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t p-4">
          <Link to="/" className="block py-2">
            Home
          </Link>
          <Link to="/shop" className="block py-2">
            Shop
          </Link>
          <Link to="/about" className="block py-2">
            About
          </Link>
          <Link to="/contact" className="block py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
