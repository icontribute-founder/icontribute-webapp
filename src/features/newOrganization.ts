import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Organization, OrganizationCategory } from "../models/organization";

const initialState: Organization = {
    email: "",
    password: "",
    registered: false,
    name: "",
    website: "",
    postalCode: "",
    description: "",
    categories: [],
    profilePictureURL: "",
};

export const newOrganizationSlice = createSlice({
    name: "newOrganization",
    initialState,
    reducers: {
        updateEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        updatePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        updateRegistered: (state, action: PayloadAction<boolean>) => {
            state.registered = action.payload;
        },
        updateName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        updateWebsite: (state, action: PayloadAction<string>) => {
            state.website = action.payload;
        },
        updatePostalCode: (state, action: PayloadAction<string>) => {
            state.postalCode = action.payload;
        },
        updateDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        updateCategories: (
            state,
            action: PayloadAction<OrganizationCategory>
        ) => {
            state.categories.push(action.payload);
        },
        updateProfilePictureURL: (state, action: PayloadAction<string>) => {
            state.profilePictureURL = action.payload;
        },
        sumbit: (state) => {
            console.log("submit", state);
        },
    },
});

export const { updateEmail } = newOrganizationSlice.actions;

export default newOrganizationSlice.reducer;
