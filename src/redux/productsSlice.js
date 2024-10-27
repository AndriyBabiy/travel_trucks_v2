import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./operations";

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.products = action.payload;
};

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});

export const productsReducer = productsSlice.reducer;
