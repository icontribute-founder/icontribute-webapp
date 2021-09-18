import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultEvent } from "../firebase-access/models";
import { EventCategory, HostingType } from "../firebase-access/models/Event";
import Shift from "../firebase-access/models/Shift";

export interface EditShiftProp {
    index: number;
    shift: Shift;
}

export const newOpportunitySlice = createSlice({
    name: "newOpportunity",
    initialState: defaultEvent,
    reducers: {
        updateCategories: (state, action: PayloadAction<EventCategory>) => {
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
            state.type = action.payload;
        },
        updateVirtual: (state, action: PayloadAction<boolean>) => {
            state.virtual = action.payload;
        },
        updateDeadline: (state, action: PayloadAction<Date>) => {
            state.deadline = action.payload;
        },
        updateImageUrl: (state, action: PayloadAction<string>) => {
            state.eventImage = action.payload;
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
    updateVirtual,
    updateDeadline,
    updateImageUrl,
    newShift,
    editShift,
    removeShift,
} = newOpportunitySlice.actions;

export default newOpportunitySlice.reducer;
