import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/AuthSlice";
export const store = configureStore({ reducer: { user: userSlice.reducer } });
