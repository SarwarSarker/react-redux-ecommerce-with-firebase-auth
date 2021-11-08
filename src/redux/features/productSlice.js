import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  product: [],
  selectedProduct: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.product = payload;
      state.loading = false;
    },
    selectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
});

//actions
export const { addProduct, selectedProduct } = productSlice.actions;

//select
export const getAllProducts = (state) => state.products.product;
export const getselectedProduct = (state) => state.products.selectedProduct;

//reducer
export default productSlice.reducer;
