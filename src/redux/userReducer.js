import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [{ number: "01855536222", password: "1234" }],
};

const userSlice = createSlice({
  name: "login_logout",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
