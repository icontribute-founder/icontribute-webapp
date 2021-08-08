import { createSlice } from "@reduxjs/toolkit";

import { Opportunity, Shift, HostingType } from "../models/opportunity";

export const shift: Shift = {
    start: new Date(),
    end: new Date(),
};

const initialState: Opportunity = {
    eventName: "Research Assistant",
    companyName: "",
    eventImageURL: "https://material-ui.com/static/images/grid/complex.jpg",
    shifts: [shift],
    categories: [],
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
    email: "test@email.com",
    address: "",
    type: undefined,
    date: undefined,
    deadline: undefined,
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
        save: (state) => {
            console.log("save", state.eventName);
        },
        publish: (state) => {
            console.log("post", state.eventName);
        },
    },
});

export const { save, publish } = newOpportunitySlice.actions;

export default newOpportunitySlice.reducer;
