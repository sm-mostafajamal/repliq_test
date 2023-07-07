import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./userReducer";

const reducer = combineReducers({
  user: user,
});

const store = configureStore({ reducer });

export default store;
