import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import shopSlice from "./shop";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      // console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        shop: shopSlice.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
