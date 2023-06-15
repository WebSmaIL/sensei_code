import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./interfaces";

import {
  fetchLogin,
  fetchRegister,
  uploadAvatar,
  updateLogin,
  updateLevel,
  updatePassword,
  updateEmail,
} from "./asyncThunk";

const initialState: IState = {
  userInfo: {
    id: "1",
    email: "213",
    login: "",
    password: "",
    isAuthorize: false,
    avatar_src: "",
    clan: "",
    date_of_register: "",
    followers: 0,
    follows_count: 0,
    friends: 0,
    fullName: "",
    last_visit: "",
  },
  isLoading: false,
  errorMessage: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    zeroingError: (state) => {
      state.errorMessage = undefined;
    },
    logOut: (state) => {
      
      state.userInfo.id = "";
      state.userInfo.email = "";
      state.userInfo.login = "";
  
      state.userInfo.isAuthorize = false;
      state.userInfo.avatar_src = "";
    },
  },
  extraReducers: (builder) => {
    builder

      // REGISTER
      .addCase(fetchRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.userInfo.id = action.payload.id;
        state.userInfo.email = action.payload.email;
        state.userInfo.login = action.payload.login;

        state.userInfo.isAuthorize = true;
        state.errorMessage = undefined;

        state.isLoading = false;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      })

      // LOGIN
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        console.log(action.payload);
        state.userInfo.id = action.payload.id;
        state.userInfo.email = action.payload.email;
        state.userInfo.login = action.payload.login;

        state.userInfo.avatar_src = action.payload.avatar_src;
        state.userInfo.isAuthorize = true;
        state.errorMessage = undefined;

        state.isLoading = false;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      })

      // UPLOAD AVATAR
      .addCase(uploadAvatar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.userInfo.avatar_src = action.payload.avatar_src;
        state.isLoading = false;
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      })
      // Update login

      .addCase(updateLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLogin.fulfilled, (state, action) => {
        state.userInfo.login = action.payload.login;
        state.isLoading = false;
      })
      .addCase(updateLogin.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      })
      // UPDATE LEVEL
      // .addCase(updateLevel.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(updateLevel.fulfilled, (state, action) => {

      //   state.isLoading = false;
      // })
      // .addCase(updateLevel.rejected, (state, action) => {
      //   state.errorMessage = action.payload?.message;
      //   state.isLoading = false;
      // })

      // Update email
      .addCase(updateEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEmail.fulfilled, (state, action) => {
        state.userInfo.email = action.payload.email;
        state.isLoading = false;
      })
      .addCase(updateEmail.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      })
      // Update password
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.userInfo.password = action.payload.password;
        state.isLoading = false;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      });
  },
});

export const { zeroingError, logOut } = userSlice.actions;

export default userSlice.reducer;
