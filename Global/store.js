"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counters/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});




