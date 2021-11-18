import {
    OrganizationCategory,
} from "@icontribute-founder/firebase-access";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currUser = {
    categories: ["Charity"], 
    companyName: "OCISO", 
    description: "Company description", 
    email: "aruzddinova@ociso.org", 
    event: ["HeMmISUcYNuHIhKF067c", "8HnCSlYY5iokfgyBPbKH", "FMdXT5rvrs6V47I6HvGF", "B4XNm5THWjNDuY19Tch9", "XbrYjC7e6iP1yRVTKEvG", "SJuRAnxPsqEfdkjxBlQI", "LqfZRo549aIKWczSmh0j"],
    notifications: [ 
        {
            date: "May 11, 2021 at 10:31:42 PM UTC-4", 
            eventID: "8HnCSlYY5iokfgyBPbKH",
            eventName: "Youth Employment Services",
            read: false,
            sourceEmail: "hdu2899@gmail.com",
            sourceProfilePicture: "file:///var/mobile/Containers/Data/Application/5525C8F3-1BFB-4934-8DF5-A6D91715F1A9/Documents/images/45365FC5-8881-494C-9372-EB57A11B3167.jpg",
            sourceUserName: "HaoHao",
            type: "companyApplied"                    
        },
        {
            date: "May 20, 2021 at 11:46:14 AM UTC-4", 
            eventID: "8HnCSlYY5iokfgyBPbKH",
            eventName: "Youth Employment Services",
            read: false,
            sourceEmail: "gaox6350@mylaurier.ca",
            sourceProfilePicture: "",
            sourceUserName: "Lauren",
            type: "companyApplied"                    
        },
        {
            date: "June 20, 2021 at 4:23:04 PM UTC-4", 
            eventID: "8HnCSlYY5iokfgyBPbKH",
            eventName: "Youth Employment Services",
            read: false,
            sourceEmail: "khalidamairi3@gmail.com",
            sourceProfilePicture: "",
            sourceUserName: "Khaled",
            type: "companyApplied"                    
        },
        {
            date: "June 22, 2021 at 1:46:55 AM UTC-4", 
            eventID: "8HnCSlYY5iokfgyBPbKH",
            eventName: "Youth Employment Services",
            read: true,
            sourceEmail: "ibrahim.khalilov@yahoo.com",
            sourceProfilePicture: "",
            sourceUserName: "Ibrahim",
            type: "companyApplied"                    
        },
        {
            date: "June 22, 2021 at 8:04:04 PM UTC-4", 
            eventID: "8HnCSlYY5iokfgyBPbKH",
            eventName: "Youth Employment Services",
            read: true,
            sourceEmail: "zhangjiacheng54@gmail.com",
            sourceProfilePicture: "",
            sourceUserName: "test1",
            type: "companyApplied"                    
        }],
    numUnreadNotifications: 5,
    password: "",
    postalCode: "K1Y 2X5",
    currProfilePic: "https://imgur.com/a/04JWf0H",
    profilePicture: "https://imgur.com/a/04JWf0H",
    rating: 2.5,
    type: "company",
    verified: true,
    website: ""
}

export const newOrganizationSlice = createSlice({
    name: "newOrganization",
    initialState: currUser,
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
        submit: (state) => {
            console.log("submit", state);
        },
    },
});

export const { updateEmail, updateCategories } = newOrganizationSlice.actions;

export default newOrganizationSlice.reducer;