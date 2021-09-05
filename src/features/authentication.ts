import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import { authApiclient } from "../AuthApiClient";
import { Authentication, AuthUser, Tokens } from "../models/auth";

const initialState: any = {
    email: "",
    type: "",
    tokens: {
        accessToken: "",
        refreshToken: "",
    },
    loading: false,
    hasLogin: false,
    error: null,
};

export const login = createAsyncThunk(
    "authentication/login",
    async (user: AuthUser, { rejectWithValue }) => {
        try {
            return await authApiclient.login(user);
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logout = createAsyncThunk(
    "authentication/logout",
    async (user: AuthUser, { rejectWithValue }) => {
        try {
            return await authApiclient.login(user);
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.hasLogin = true;
                state.error = null;
                state.tokens.accessToken = payload.accessToken;
                state.tokens.refreshToken = payload.refreshToken;
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(logout.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.hasLogin = false;
                state.tokens.accessToken = "";
                state.tokens.refreshToken = "";
                state.error = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export default authenticationSlice.reducer;
