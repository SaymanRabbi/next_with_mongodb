"use client";

import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./features/apiSlice/apiSlice";
import counterSlice from "./features/counters/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    api: apiSlice
  },
});




