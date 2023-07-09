import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./userReducer";
import product from "./productReducer";
import pagination from "./Admin/paginationReducer";

const reducer = combineReducers({
  user,
  product,
  pagination,
});

const store = configureStore({ reducer });

export default store;
