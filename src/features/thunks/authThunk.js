import { createAsyncThunk } from "@reduxjs/toolkit";
import apiHelper from "../apiHelper";

const signIn = createAsyncThunk("auth/signIn", async (user, thunkAPI) => {
  const requestOptions = {
    url: `/auth/sign-in`,
    data: user,
  };
  return apiHelper("post", requestOptions, thunkAPI);
});

const signUp = createAsyncThunk("auth/signUp", async (user, thunkAPI) => {
  const requestOptions = {
    url: `/auth/sign-up`,
    data: user,
  };
  return apiHelper("post", requestOptions, thunkAPI);
});

const setRole = createAsyncThunk("auth/setRole", async (dataObj, thunkAPI) => {
  const requestOptions = {
    url: `/auth/role`,
    data: dataObj,
  };
  return apiHelper("post", requestOptions, thunkAPI);
});

const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (dataObj, thunkAPI) => {
    const requestOptions = {
      url: `/auth/forgot-password`,
      data: dataObj,
    };
    return apiHelper("post", requestOptions, thunkAPI);
  }
);

const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (dataObj, thunkAPI) => {
    console.log(dataObj);
    const { passwordResetToken, password, confirmPassword } = dataObj;
    const requestOptions = {
      url: `/auth/reset-password/${passwordResetToken}`,
      data: {
        password,
        passwordConfirm: confirmPassword,
      },
    };
    return apiHelper("post", requestOptions, thunkAPI);
  }
);

const setPhoto = createAsyncThunk("auth/setPhoto", async (dataObj, thunkAPI) => {
  const requestOptions = {
    url: `/users/update-me`,
    data: dataObj,
  };
  return apiHelper("patch", requestOptions, thunkAPI);
});

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const requestOptions = {
    url: `/auth/logout`,
  };
  return apiHelper("post", requestOptions, thunkAPI);
});

export { signIn, signUp, setRole, setPhoto, forgotPassword, resetPassword, logout };
