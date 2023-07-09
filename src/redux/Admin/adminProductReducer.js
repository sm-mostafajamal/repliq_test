import { createSlice } from "@reduxjs/toolkit";
import { getOrderedProducts } from "../../services/admin/adminServices";

const initialState = {
  orderedProducts: [],
  isLoading: true,
};

const adminProductSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    appendOrderedProducts: (state, action) => {
      state.orderedProducts = [...action.payload];
    },
  },
});

export const { appendOrderedProducts } = adminProductSlice.actions;

// fetch all ordered products and append
export const getAllOrderedProducts = () => {
  return async (dispatch) => {
    const orderedProducts = await getOrderedProducts("/orderedProducts");
    dispatch(appendOrderedProducts(orderedProducts));
  };
};

export default adminProductSlice.reducer;
