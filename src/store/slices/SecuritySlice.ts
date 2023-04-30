import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");
const initialState = {
  token: token || null,
  user: {},
};
const securitySlice = createSlice({
  name: "security",
  initialState,
  reducers: {
    authenticate: (state) => {
      state.token = null;
    },
    loadUser: (state) => {
      state.user = {};
    },
    login: (state, action) => {
      const { payload } = action;
      state.token = payload.token;
      localStorage.setItem("token", payload.token);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
    resetToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
    setUser: (state, action) => {
      console.log("action.payload", action.payload);
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = {};
    },
  },
});

export const { actions: securityActions, reducer: securityReducer } =
  securitySlice;

export default securitySlice;
