import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    defaultEvent,
    EventCategory,
    HostingType,
    Shift,
} from "@icontribute-founder/firebase-access";

export interface EditShiftProp {
    index: number;
    shift: Shift;
}

const newOpportunity = { ...defaultEvent, deadline: Date.now() };

export const newOpportunitySlice = createSlice({
    name: "newOpportunity",
    initialState: newOpportunity,
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
            state.deadline = action.payload.getTime();
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
        reset: (state) => {
            state = newOpportunity;
        },
    },
});

export const {
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
    reset,
} = newOpportunitySlice.actions;

export default newOpportunitySlice.reducer;
