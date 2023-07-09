import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "jobs",
  initialState: {
    allProducts: [],
    pageNumbers: [],
    currentPageNumber: 1,
    productsToShow: [],
  },
  reducers: {
    appendProducts: (state, action) => {
      //   console.log(action.payload);
      state.allProducts = [...action.payload];
    },
    setPageNumber: (state, action) => {
      state.currentPageNumber = action.payload;
      const productsPerPage = 5;
      const totalPage = Math.ceil(state.allProducts.length / productsPerPage);

      if (state.allProducts.length <= productsPerPage)
        state.currentPageNumber = 1;

      state.pageNumbers = [];
      for (let i = 1; i <= totalPage; i++) {
        state.pageNumbers.push(i);
      }

      const lastProductIndex = state.currentPageNumber * productsPerPage;
      const firstProductIndex = lastProductIndex - productsPerPage;

      if (state.currentPageNumber > 0 && state.currentPageNumber <= totalPage) {
        state.productsToShow = state.allProducts.slice(
          firstProductIndex,
          lastProductIndex
        );
      }
    },
  },
});

export const { appendProducts, setPageNumber } = paginationSlice.actions;

export default paginationSlice.reducer;
