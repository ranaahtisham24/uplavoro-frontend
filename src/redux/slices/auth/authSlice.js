import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: "",
    token: null,
    user: {},
    user_id: "",
    isAuthenticated: false,
    message: "",
  },
  reducers: {
    authRequestLoading: (state, action) => {
      state.isLoading = true;
      state.error = "";
      state.token = "";
      state.isAuthenticated = false;
      state.user = {};
    },
    invalidRequest: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.user = {};
      state.token = "";
      state.isAuthenticated = false;
    },
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.user_id = action.payload.user.id;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = "";
      state.message = "Login Success";
    },
    logout: (state) => {
      state.user = {};
      state.user_id = "";
      state.token = null;
      state.isLoading = false;
      state.error = "";
      state.message = "Logout Success";
      state.isAuthenticated = false;
    },
    register: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.data.token;
      state.user_id = action.payload.data.id;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = "";
      state.message = "Registered Successfully.";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const {
  authRequestLoading,
  invalidRequest,
  login,
  logout,
  register,
  forgotPassword,
  resetPassword,
  reloadPage,
  setUser
} = authSlice.actions;
