import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TErrorBag<T> = {
  error: T[] | Object | String;
};

type TError = {
  code: null | String;
  message: null | String;
};

const initialState: TErrorBag<TError> = {
  error: {
    code: null,
    message: null,
  },
};

const errorBagSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError(state: TErrorBag<TError>, action: PayloadAction<TError>) {
      state.error = {
        code: action.payload.code,
        message: action.payload.message,
      };
    },
  },
});

export const { actions: errorBagActions, reducer: errorBagReducer } =
  errorBagSlice;

export default errorBagSlice;
