import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  principal: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPrincipal: (state, action) => {
      state.principal = action.payload;
    },
    clearPrincipal: (state) => {
      state.principal = undefined;
    },
  },
});

export const { setPrincipal, clearPrincipal } = authSlice.actions;

export default authSlice.reducer;
