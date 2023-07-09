import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./userReducer";
import product from "./productReducer";
import orderedProducts from "./Admin/adminProductReducer";

const reducer = combineReducers({
  user,
  product,
  orderedProducts,
});

const store = configureStore({ reducer });

export default store;
