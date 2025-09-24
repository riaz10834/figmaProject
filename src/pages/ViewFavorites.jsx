import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../components/Redux/FavoriteSlice";
import { useNavigate } from "react-router-dom";

function ViewFavorites() {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="pt-[100px] max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">My Favorites</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-lg">No items in your favorites.</p>
      ) : (
        <div className="space-y-6">
          {favorites.map((item, index) => (
            <div
              key={index}
              className="group flex border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="w-40 h-40 flex-shrink-0 overflow-hidden">
                <img
                  src={item.pic}
                  alt={item.des}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-between p-4 flex-1">
                <div>
                  <p className="font-semibold text-lg">{item.des}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-xl font-bold text-gray-800">
                      ${item.price}
                    </p>
                    {item.strike && (
                      <p className="text-sm line-through text-gray-500">
                        ${item.strike}
                      </p>
                    )}
                    {item.off && (
                      <p className="text-sm text-red-500">({item.off} off)</p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => dispatch(removeFavorite(item))}
                  className="mt-4 w-fit bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate("/shop")}
          className="bg-[#008FAB] text-white px-6 py-3 rounded-lg shadow hover:bg-[#00708a] transition text-lg"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default ViewFavorites;
