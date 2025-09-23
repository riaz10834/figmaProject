import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./FavoriteSlice";
import bagSlice from "./BagSlice";
const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
    bag: bagSlice,
  },
});

export default store;
