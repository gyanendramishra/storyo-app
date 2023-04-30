import { combineReducers } from "@reduxjs/toolkit";
import { securityReducer } from "./slices/SecuritySlice";
import { errorBagReducer } from "./slices/ErrorBagSlice";
import { loadinReducer } from "./slices/LoadingSlice";

export default combineReducers({
  loading: loadinReducer,
  security: securityReducer,
  errorBag: errorBagReducer,
});
