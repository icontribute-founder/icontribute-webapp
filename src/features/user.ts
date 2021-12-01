import { AuthErrorCodes, UserCredential } from "@firebase/auth";
import { FirebaseError } from "@firebase/util";
import { Company } from "@icontribute-founder/firebase-access";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, user } from "../configure";

interface AuthenticationI {
  userAuth: UserCredential | null;
  userProfile: any;
  loggedIn: boolean;
  error: string;
  loginLoading: boolean;
  loadingLocalUser: boolean;
  resetLoading: boolean;
  signupLoading: boolean;
}

const initialState: AuthenticationI = {
  userAuth: null,
  userProfile: null,
  loggedIn: false,
  error: "",
  loginLoading: false,
  signupLoading: false,
  resetLoading: false,
  loadingLocalUser: false,
};

export const login = createAsyncThunk<
  { userAuth: UserCredential; userProfile: any },
  { email: string; password: string },
  { rejectValue: any }
>("user/login", async ({ email, password }, thunkApi) => {
  try {
    const userAuth = await auth.loginWithEmailAndPassword(email, password);
    const userProfile = await user.getCompany(email);
    sessionStorage.setItem("user", JSON.stringify(userAuth));
    return { userAuth, userProfile };
  } catch (error) {
    if (error instanceof FirebaseError) {
      return thunkApi.rejectWithValue({ code: error.code });
    }
    return thunkApi.rejectWithValue({ code: "unknown" });
  }
});

export const loadUser = createAsyncThunk<
  { userAuth: UserCredential; userProfile: any },
  void,
  { rejectValue: any }
>("user/loadUser", async (_, thunkApi) => {
  let userAuth = null;
  let userProfile = null;
  const item = sessionStorage.getItem("user");
  if (item) {
    userAuth = JSON.parse(item);
    const email = userAuth.user.email;
    try {
      userProfile = await user.getCompany(email);
    } catch (error) {
      return thunkApi.rejectWithValue({ code: "error" });
    }
  }
  return { userAuth, userProfile };
});

export const signup = createAsyncThunk<
  { userAuth: UserCredential; userProfile: any },
  { company: Company; password: string },
  { rejectValue: any }
>("user/signup", async ({ company, password }, thunkApi) => {
  try {
    const userAuth = await auth.signupWithEmailAndPassword(
      company.email,
      password
    );
    await user.createCompany(company);
    return { userAuth, userProfile: company };
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue({ code: "bad" });
  }
});

export const resetPassword = createAsyncThunk<void, { email: string }, any>(
  "user/resetPassword",
  async ({ email }, thunkApi) => {
    // send password reset email
    try {
      await auth.resetPassword(email);
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue({ code: "bad" });
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      state.loginLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log(payload);
      const { userAuth, userProfile } = payload;
      state.loginLoading = false;
      state.loggedIn = true;
      state.userAuth = userAuth;
      state.userProfile = userProfile;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      console.log(payload);

      const { INVALID_EMAIL, INVALID_PASSWORD } = AuthErrorCodes;
      state.loginLoading = false;
      state.loggedIn = false;
      switch (payload.code) {
        case INVALID_EMAIL:
          state.error = "Please try again";
          break;
        case INVALID_PASSWORD:
          state.error = "Please try again";
          break;
        default:
          state.error = "Unknown Error";
          break;
      }
    });

    // load user from session storage
    builder.addCase(loadUser.pending, (state) => {
      state.loadingLocalUser = true;
    });
    builder.addCase(loadUser.fulfilled, (state, { payload }) => {
      console.log(payload);

      state.loadingLocalUser = false;
      state.userAuth = null;
      state.userProfile = null;

      const { userAuth, userProfile } = payload;
      if (userAuth !== null && userProfile !== null) {
        state.loggedIn = true;
        state.userProfile = userProfile;
        state.userAuth = userAuth;
        state.error = "";
      } else {
        state.loggedIn = false;
      }
    });
    builder.addCase(loadUser.rejected, (state) => {
      state.loadingLocalUser = false;
      state.loggedIn = false;
    });

    // sign up
    builder.addCase(signup.pending, (state) => {
      state.signupLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.signupLoading = false;
      const { userAuth, userProfile } = payload;
      state.loggedIn = true;
      state.userAuth = userAuth;
      state.userProfile = userProfile;
      state.error = "";
    });
    builder.addCase(signup.rejected, (state, { payload }) => {
      state.signupLoading = false;
    });

    // reset password
    builder.addCase(resetPassword.pending, (state) => {
      state.resetLoading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, { payload }) => {
      state.resetLoading = false;
    });
    builder.addCase(resetPassword.rejected, (state, { payload }) => {
      state.resetLoading = false;
    });
  },
});

// export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
