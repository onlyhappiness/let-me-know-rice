import { HYDRATE } from "next-redux-wrapper";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
  }
};

export default rootReducer;
