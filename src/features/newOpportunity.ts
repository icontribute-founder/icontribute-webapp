import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
    Opportunity,
    Shift,
    HostingType,
    OpportunityCategory,
    OpportunityType,
} from "../models/opportunity";

export interface EditShiftProp {
    index: number;
    shift: Shift;
}

const initialState: Opportunity = {
    eventName: "",
    companyName: "",
    eventImageURL: "",
    shifts: [],
    categories: [],
    description: "",
    email: "test@email.com",
    address: "",
    type: OpportunityType.Inperson,
    date: Date.now(),
    deadline: Date.now(),
    role: "",
    requirements: "",
    url: "opportunityurl.com",
    hostingType: HostingType.Internal,
    notes: "",
};

export const newOpportunitySlice = createSlice({
    name: "newOpportunity",
    initialState,
    reducers: {
        updateCategories: (
            state,
            action: PayloadAction<OpportunityCategory>
        ) => {
            const category = action.payload;
            if (state.categories.includes(category)) {
                const index = state.categories.indexOf(category);
                if (index > -1) state.categories.splice(index, 1);
            } else if (state.categories.length < 3) {
                state.categories.push(category);
            }
        },
        updateTitle: (state, action: PayloadAction<string>) => {
            state.eventName = action.payload;
        },
        updateLocation: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        updateDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        updateHostingType: (state, action: PayloadAction<HostingType>) => {
            state.hostingType = action.payload;
        },
        updateType: (state, action: PayloadAction<OpportunityType>) => {
            state.type = action.payload;
        },
        updateDeadline: (state, action: PayloadAction<number>) => {
            state.deadline = action.payload;
        },
        updateImageUrl: (state, action: PayloadAction<string>) => {
            state.eventImageURL = action.payload;
        },
        newShift: (state, action: PayloadAction<Shift>) => {
            state.shifts.push(action.payload);
        },
        removeShift: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            console.log(index);
            state.shifts.splice(index, 1);
        },
        editShift: (state, action: PayloadAction<EditShiftProp>) => {
            const { index, shift } = action.payload;
            state.shifts[index] = shift;
        },
        save: (state) => {
            console.log("save", state);
        },
        publish: (state) => {
            console.log("post", state.eventName);
        },
    },
});

export const {
    save,
    publish,
    updateTitle,
    updateDescription,
    updateLocation,
    updateCategories,
    updateHostingType,
    updateType,
    updateDeadline,
    updateImageUrl,
    newShift,
    editShift,
    removeShift,
} = newOpportunitySlice.actions;

export default newOpportunitySlice.reducer;
