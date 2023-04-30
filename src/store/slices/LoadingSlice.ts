import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  loading: boolean;
  type: "inline" | "page";
};

const initialState: InitialState = {
  loading: false,
  type: "inline",
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { actions: loadingActions, reducer: loadinReducer } = loadingSlice;
export default loadingSlice;
