import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./userReducer";
import product from "./productReducer";

const reducer = combineReducers({
  user,
  product,
});

const store = configureStore({ reducer });

export default store;
