import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "GAINER",
};

export const productSlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const getSelectedCategory = (state) =>
  state.productReducer.selectedCategory;

export const { filterCategory } = productSlice.actions;
export default productSlice.reducer;
