import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBag } from "../components/Redux/BagSlice";
import { useNavigate } from "react-router-dom";

function ViewBag() {
  const bagItems = useSelector((state) => state.bag.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="pt-[100px] max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">My Bag</h2>

      {bagItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your bag is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bagItems.map((item, index) => (
            <div
              key={index}
              className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={item.pic}
                  alt={item.des}
                  className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
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

                <button
                  onClick={() => dispatch(removeFromBag(item))}
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg text-sm hover:bg-red-600 transition"
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
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition text-lg"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default ViewBag;
