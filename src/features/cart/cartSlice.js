import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initalState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    //clear cart items
    clearCartItems: (state) => {
      state.cartItems = []; //We can mutate the state directly here, as immer library is working behind the scene
    },
    //remove item
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    //increase amount
    increaseAmount: (state, action) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      cartItem.amount++;
    },
    //decrease amount
    decreaseAmount: (state, action) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      cartItem.amount--;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

// console.log(cartSlice);

export default cartSlice.reducer;
export const {
  clearCartItems,
  removeItem,
  increaseAmount,
  decreaseAmount,
  calculateTotal,
} = cartSlice.actions;
