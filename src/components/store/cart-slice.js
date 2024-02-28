import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart(state, actions) {
      const existingItem = state.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (existingItem === -1) {
        state.push({ ...actions.payload, quantity: 1 });
      } else {
        state[existingItem].quantity += 1;
      }
    },
    removeCart(state, actions) {
      const id = actions.payload;
      const existingItem = state.findIndex((item) => item.id === id);
      console.log(existingItem);
      if (state[existingItem].quantity === 1) {
        return state.filter((item) => item.id !== id);
      } else {
        state[existingItem].quantity -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
