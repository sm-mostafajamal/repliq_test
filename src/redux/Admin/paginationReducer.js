import { createSlice } from "@reduxjs/toolkit";
import { getOrderedProducts } from "../../services/admin/adminServices";

const paginationSlice = createSlice({
  name: "jobs",
  initialState: {
    allProducts: [],
    allOrderedProducts: [],
    allUsers: [],
    pageNumbers: [],
    productsToShow: [],
    orderedProductsToShow: [],
    usersToShow: [],
    currentPageNumber: 1,
  },
  reducers: {
    appendProducts: (state, action) => {
      //   console.log(action.payload);
      state.allProducts = [...action.payload];
    },
    setPageNumber: (state, action) => {
      state.currentPageNumber = action.payload.pageNumber;
      const productsPerPage = 5;
      let totalPage = 0;

      // check which page the req coming from
      if (action.payload.page === "productLists") {
        totalPage = Math.ceil(state.allProducts.length / productsPerPage);
      } else if (action.payload.page === "orderedProducts") {
        totalPage = Math.ceil(
          state.allOrderedProducts.length / productsPerPage
        );
      } else if (action.payload.page === "CustomersList") {
        totalPage = Math.ceil(state.allUsers.length / productsPerPage);
      }

      state.pageNumbers = [];
      for (let i = 1; i <= totalPage; i++) {
        state.pageNumbers.push(i);
      }
      const lastProductIndex = state.currentPageNumber * productsPerPage;
      const firstProductIndex = lastProductIndex - productsPerPage;

      // check the page req and append to the specific page state
      if (
        state.currentPageNumber > 0 &&
        state.currentPageNumber <= totalPage &&
        action.payload.page === "productLists"
      ) {
        state.productsToShow = state.allProducts.slice(
          firstProductIndex,
          lastProductIndex
        );
      } else if (
        state.currentPageNumber > 0 &&
        state.currentPageNumber <= totalPage &&
        action.payload.page === "orderedProducts"
      ) {
        state.orderedProductsToShow = state.allOrderedProducts.slice(
          firstProductIndex,
          lastProductIndex
        );
      } else if (
        state.currentPageNumber > 0 &&
        state.currentPageNumber <= totalPage &&
        action.payload.page === "CustomersList"
      ) {
        state.usersToShow = state.allUsers.slice(
          firstProductIndex,
          lastProductIndex
        );
      }
    },
    appendAllOrderedProducts: (state, action) => {
      // console.log(action.payload);
      state.allOrderedProducts = [...action.payload];
    },
    appendAllUsers: (state, action) => {
      // console.log(action.payload);
      state.allUsers = [...action.payload];
    },
  },
});

export const {
  appendProducts,
  appendAllOrderedProducts,
  appendAllUsers,
  setPageNumber,
} = paginationSlice.actions;

// fetch all ordered products and append
export const getAllOrderedProducts = () => {
  return async (dispatch) => {
    const orderedProducts = await getOrderedProducts("/orderedProducts");
    return dispatch(appendAllOrderedProducts(orderedProducts));
  };
};

export default paginationSlice.reducer;
