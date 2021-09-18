import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState: { user: null },
    reducers: {
        addUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        },
    },
});

export const { addUser, removeUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;
