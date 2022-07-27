import { createSlice } from "@reduxjs/toolkit";

import {
  loadShopLists, // 상점 리스트들
} from "../actions/shop";

export const initialState = {
  shopLists: [],

  // load Shop Lists
  loadShopListsLoading: false,
  loadShopListsDone: false,
  loadShopListsError: null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: (builder) =>
    builder
      // 상점들 load
      .addCase(loadShopLists.pending, (state) => {
        state.loadShopListsLoading = true;
        state.loadShopListsDone = false;
        state.loadShopListsError = null;
      })
      .addCase(loadShopLists.fulfilled, (state, action) => {
        state.loadShopListsLoading = true;
        state.loadShopListsDone = true;
        state.shopLists = action.payload.data;
      })
      .addCase(loadShopLists.rejected, (state, action) => {
        state.loadShopListsLoading = false;
        state.loadShopListsError = action.error;
      })
      .addDefaultCase((state) => state),
});

export default shopSlice;
