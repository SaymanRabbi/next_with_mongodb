// apiSlice.js
import BaseApi from "@/lib/Api/BaseApi/BaseApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// async thunk
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(`${BaseApi}/product`);
    return response.data;
})

// create slice
const apiSlice = createSlice({
    name: 'api',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
         builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
         })
         .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.loading = false
         })
         .addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
          });
    }
})

export default apiSlice.reducer
