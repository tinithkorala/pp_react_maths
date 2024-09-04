import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../constants/constants";
import {
  forgotPassword,
  logout,
  resetPassword,
  setPhoto,
  setRole,
  signIn,
  signUp,
} from "../thunks/authThunk";

const initialState = {
  isAuthenticate: false,
  status: REQUEST_STATUS.IDLE,
  error: null,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState(state) {
      state.status = REQUEST_STATUS.IDLE;
    },
    studentState(state, action) {
      state.user.userDetials = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // SignIn
      .addCase(signIn.pending, (state) => {
        state.status = REQUEST_STATUS.PENDING;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.FULFILLED;
        state.user = action.payload.user;
        state.isAuthenticate = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = REQUEST_STATUS.REJECTED;
        state.user = {};
        state.isAuthenticate = false;
        state.error = action.payload;
      })

      // SignUp
      .addCase(signUp.pending, (state) => {
        state.status = REQUEST_STATUS.PENDING;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.FULFILLED;
        state.user = action.payload.user;
        state.isAuthenticate = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = REQUEST_STATUS.REJECTED;
        state.user = {};
        state.isAuthenticate = false;
        state.error = action.payload;
      })

      // SetRole
      .addCase(setRole.pending, (state) => {
        state.status = REQUEST_STATUS.PENDING;
        state.error = null;
      })
      .addCase(setRole.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.FULFILLED;
        state.user.role = action.payload.role;
        state.user.userDetials = action.payload.userDetials;
      })
      .addCase(setRole.rejected, (state, action) => {
        state.status = REQUEST_STATUS.REJECTED;
        state.error = action.payload;
      })

      // SetPhoto
      .addCase(setPhoto.pending, (state) => {
        state.status = REQUEST_STATUS.PENDING;
        state.error = null;
      })
      .addCase(setPhoto.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.FULFILLED;
        state.user.photo = action.payload.user.photo;
        state.user.isPhotoUploaded = action.payload.user.isPhotoUploaded;
      })
      .addCase(setPhoto.rejected, (state, action) => {
        state.status = REQUEST_STATUS.REJECTED;
        state.error = action.payload;
      })

      // forgotPassword
      .addCase(forgotPassword.pending, (state) => {
        state.status = REQUEST_STATUS.PENDING;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.status = REQUEST_STATUS.FULFILLED;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = REQUEST_STATUS.REJECTED;
        state.error = action.payload;
      })

      // Password reset
      .addCase(resetPassword.pending, (state) => {
        state.status = REQUEST_STATUS.PENDING;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.FULFILLED;
        state.user = action.payload.user;
        state.isAuthenticate = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = REQUEST_STATUS.REJECTED;
        state.user = {};
        state.isAuthenticate = false;
        state.error = action.payload;
      })

      // Logout
      .addCase(logout.pending, (state) => {
        state.status = REQUEST_STATUS.PENDING;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = REQUEST_STATUS.FULFILLED;
        state.user = {};
        state.isAuthenticate = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = REQUEST_STATUS.REJECTED;
        state.user = {};
        state.isAuthenticate = false;
        state.error = action.payload;
      });
  },
});

export const selectIsAuthenticate = (state) => state.auth.isAuthenticate;
export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;
export const selectUser = (state) => state.auth.user;
export const { resetState, studentState } = authSlice.actions;

export default authSlice.reducer;
