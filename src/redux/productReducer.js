import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../services/ecommerce";

const initialState = {
  products: [],
  carts: [],
  totalPrice: 0,
  isLoading: true,
};

const productSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    appendProducts: (state, action) => {
      return {
        ...state,
        products: state.products.concat(...action.payload),
        isLoading: false,
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
    removeCartProduct: (state, action) => {
      const products = state.carts.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        carts: products,
        totalPrice:
          state.totalPrice - action.payload.quantity * action.payload.price,
      };
    },
    emptyCartProduct: (state, action) => {
      return {
        ...state,
        carts: [],
        totalPrice: 0,
      };
    },
  },
});

export const {
  appendProducts,
  appendCart,
  removeCartProduct,
  emptyCartProduct,
} = productSlice.actions;

// fetch all products and append
export const getAllProducts = () => {
  return async (dispatch) => {
    const products = await getAll("/products");
    dispatch(appendProducts(products));
  };
};

export default productSlice.reducer;
