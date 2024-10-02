"use client";

import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counters",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state,actions) => {
            // if the item is already in the cart then don't add it
            if(state.cart.find((item) => item.id === actions.payload.id)){
                return;
            }
             state.cart = [...state.cart,actions.payload]
        },
        removeFromCart: (state,actions) => {
            state.cart = state.cart.filter((item) => item.id !== actions.payload);
        }
    },
});     
export const { addToCart, removeFromCart } = CounterSlice.actions;
export default CounterSlice.reducer;