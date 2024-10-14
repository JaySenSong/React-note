import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../userSlice";

const store = configureStore({
  reducer: userSlice,
});

export type RootState = ReturnType<typeof store.getState>
