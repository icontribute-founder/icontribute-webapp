import { AuthErrorCodes, UserCredential } from "@firebase/auth";
import { FirebaseError } from "@firebase/util";
import { Company, Student } from "@icontribute-founder/firebase-access";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth, user } from "../configure";

interface AuthenticationI {
  userAuth: UserCredential | null;
  userProfile: Company | Student | null;
  loggedIn: boolean;
  error: string;
  loading: boolean;
  loadingLocalUser: boolean;
}

const initialState: AuthenticationI = {
  userAuth: null,
  userProfile: null,
  loggedIn: false,
  error: "",
  loading: false,
  loadingLocalUser: false,
};

export const login = createAsyncThunk<
  { userAuth: UserCredential; userProfile: any },
  { email: string; password: string },
  { rejectValue: any }
>("authentication/login", async ({ email, password }, thunkApi) => {
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
>("authentication/loadUser", async (_, thunkApi) => {
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

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log(payload);
      const { userAuth, userProfile } = payload;
      state.loading = false;
      state.loggedIn = true;
      state.userAuth = userAuth;
      state.userProfile = userProfile;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      console.log(payload);

      const { INVALID_EMAIL, INVALID_PASSWORD } = AuthErrorCodes;
      state.loading = false;
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
        state.error = "";
      } else {
        state.loggedIn = false;
      }
    });
    builder.addCase(loadUser.rejected, (state) => {
      state.loadingLocalUser = false;
      state.loggedIn = false;
    });
  },
});

// export const { addUser, removeUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;
