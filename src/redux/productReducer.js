import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  carts: [],
  totalPrice: 0,
};

const productSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    appendProducts: (state, action) => {
      return {
        ...state,
        products: state.products.concat(...action.payload),
      };
    },
    appendCart: (state, action) => {
      // add cart and total price of cart product
      return {
        ...state,
        carts: state.carts.concat(action.payload),
        totalPrice:
          state.totalPrice + action.payload.quantity * action.payload.price,
      };
    },
  },
});

export const { appendProducts, appendCart } = productSlice.actions;

export default productSlice.reducer;
