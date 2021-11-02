import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    defaultEvent,
    EventCategory,
    HostingType,
    Shift,
} from "@icontribute-founder/firebase-access";
import { GeoPoint, Timestamp } from "@firebase/firestore";

export interface EditShiftProp {
    index: number;
    shift: Shift;
}

export const serializeGeopoint = (point: GeoPoint) => {
    return JSON.stringify(point);
};

export const toGeopoint = (point: string) => {
    const pointJson = JSON.parse(point);
    return new GeoPoint(pointJson.latitude, pointJson.longitude);
};

const initialState = {
    ...defaultEvent,
    coordinates: serializeGeopoint(defaultEvent.coordinates),
};

export const newOpportunitySlice = createSlice({
    name: "newOpportunity",
    initialState,
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
            state.shift.push(action.payload);
        },
        removeShift: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            console.log(index);
            state.shift.splice(index, 1);
        },
        editShift: (state, action: PayloadAction<EditShiftProp>) => {
            const { index, shift } = action.payload;
            state.shift[index] = shift;
        },
        reset: (state) => initialState,
        useExistingOpportunity: (state, action) => {
            let opportunity =
                action.payload === null ? initialState : action.payload;

            const {
                eventName,
                address,
                description,
                virtual,
                categories,
                date,
                deadline,
            } = opportunity;
            console.log(categories);

            state.eventName = eventName;
            state.address = address;
            state.description = description;
            state.virtual = virtual;
            state.deadline = deadline;
            state.date = date;
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
    useExistingOpportunity,
} = newOpportunitySlice.actions;

export default newOpportunitySlice.reducer;
