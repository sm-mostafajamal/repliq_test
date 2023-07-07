import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
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
  },
});

export const { appendProducts } = productSlice.actions;

export default productSlice.reducer;
