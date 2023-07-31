import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../app/models/product";

export interface ShoppingCartState {
  items: Product[];
}

const initialState: ShoppingCartState = {
  items: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
