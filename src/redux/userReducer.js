import { createSlice } from "@reduxjs/toolkit";
import { createNewUser, getAllUser } from "../services/user";

const initialState = {
  users: [],
  user: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser, setUser } = userSlice.actions;

// fetch all users and append
export const getUsers = () => {
  return async (dispatch) => {
    const users = await getAllUser();
    dispatch(addUser(users));
  };
};
// add new user
export const createUser = (newUser) => {
  return async (dispatch) => {
    await createNewUser(newUser);
    dispatch(addUser(newUser));
  };
};
export default userSlice.reducer;
