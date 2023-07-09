import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./userReducer";
import product from "./productReducer";
import orderedProducts from "./Admin/adminProductReducer";
import pagination from "./Admin/paginationReducer";

const reducer = combineReducers({
  user,
  product,
  orderedProducts,
  pagination,
});

const store = configureStore({ reducer });

export default store;
