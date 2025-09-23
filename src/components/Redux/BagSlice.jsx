import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: {
    items: [],
  },
  reducers: {
    addToBag: (state, action) => {
      const exists = state.items.find(
        (item) => item.des === action.payload.des
      );
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromBag: (state, action) => {
      state.items = state.items.filter(
        (item) => item.des !== action.payload.des
      );
    },
    clearBag: (state) => {
      state.items = [];
    },
  },
});

export const { addToBag, removeFromBag, clearBag } = bagSlice.actions;
export default bagSlice.reducer;
