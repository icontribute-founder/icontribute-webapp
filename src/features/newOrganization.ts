import {
    defaultCompany,
    OrganizationCategory,
} from "@icontribute-founder/firebase-access";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const newOrganizationSlice = createSlice({
    name: "newOrganization",
    initialState: defaultCompany,
    reducers: {
        updateEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        updatePassword: (state, action: PayloadAction<string>) => {
            // state.password = action.payload;
        },
        updateRegistered: (state, action: PayloadAction<boolean>) => {
            // state.registered = action.payload;
        },
        updateName: (state, action: PayloadAction<string>) => {
            state.companyName = action.payload;
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
            state.profilePicture = action.payload;
        },
        sumbit: (state) => {
            console.log("submit", state);
        },
    },
});

export const { updateEmail, updateCategories } = newOrganizationSlice.actions;

export default newOrganizationSlice.reducer;
