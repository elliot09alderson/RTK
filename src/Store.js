import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/AuthSlice";
// configuring the state
export const store = configureStore({ reducer: { user: userSlice.reducer } });
