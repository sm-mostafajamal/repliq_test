import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginLogoutReducer from "./loginLogoutReducer";

const reducer = combineReducers({
  loginLogout: loginLogoutReducer,
});

const store = configureStore({ reducer });

export default store;
