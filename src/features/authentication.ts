import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Authentication, Tokens } from "../models/auth";

const initialState: Authentication = {
    email: "",
    type: "",
    tokens: {
        accessToken: "",
        refreshToken: "",
    },
    hasLogin: false,
};

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<Tokens>) => {
            state.tokens = action.payload;
        },
        logout: (state) => {
            state = initialState;
        },
    },
});
