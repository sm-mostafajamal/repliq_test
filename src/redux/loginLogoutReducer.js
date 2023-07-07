import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const loginLogOutSlice = createSlice({
  name: "login_logout",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        user: state.user.concat(action.payload),
      };
    },
  },
});

export const { addUser } = loginLogOutSlice.actions;

export default loginLogOutSlice.reducer;
