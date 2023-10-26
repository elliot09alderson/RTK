import { createSlice } from "@reduxjs/toolkit";

// creating the slice
export const userSlice = createSlice({
  name: "user", //name of reducer
  //   initializing the state
  initialState: {
    value: { username: "" },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = { username: "logout" };
    },
  },
});

// exporting the particular actions
export const { login, logout } = userSlice.actions;
