import React from "react";
import { useSelector } from "react-redux";
import { MdFavorite } from "react-icons/md";

function ShowItems() {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <h1 className="text-xl font-bold">My Shop</h1>
      <div className="relative">
        <MdFavorite className="text-2xl text-red-500 cursor-pointer" />
        {favorites.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {favorites.length}
          </span>
        )}
      </div>
    </div>
  );
}

export default ShowItems;
