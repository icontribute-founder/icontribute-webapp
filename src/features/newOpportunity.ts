import { createSlice } from "@reduxjs/toolkit";

export interface NewOpportunityState {
    hostingType: HostingType;
    deadline?: Date;
    type?: OpportunityType;
    title: string;
    location: string;
    description: string;
    shifts: Shift[];
    photoUrl: string;
}

export enum OpportunityType {
    Inperson = "IN_PERSON",
    Virtual = "VIRTUAL",
}

export enum HostingType {
    Internal = "INTERNAL",
    External = "EXTERNAL",
}

export interface Shift {
    start: Date;
    end: Date;
}

const shift: Shift = {
    start: new Date(),
    end: new Date(),
};

const initialState: NewOpportunityState = {
    hostingType: HostingType.Internal,
    deadline: undefined,
    type: undefined,
    title: "Research Assistant",
    location: "",
    description: `Your primary roles include attending development
        classes, taking metrics, providing support to the class
        members in and out of class, provide support during
        interactive activities and by calling class members when
        support is needed. This role also involves preparation
        for Development Course facilitation includ ... Your
        primary roles include attending development classes,
        taking metrics, providing support to the class members
        in and out of class, provide support during interactive
        activities and by calling class members when support is
        needed. This role also involves preparation for
        Development Course facilitation include.`,
    shifts: [shift],
    photoUrl: "https://material-ui.com/static/images/grid/complex.jpg",
};

export const newOpportunitySlice = createSlice({
    name: "newOpportunity",
    initialState,
    reducers: {
        save: (state) => {
            console.log("save", state.title);
        },
        publish: (state) => {
            console.log("post", state.title);
        },
    },
});

export const { save, publish } = newOpportunitySlice.actions;

export default newOpportunitySlice.reducer;
