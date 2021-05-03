// import React from "react"

import Dashboard from "./views/Dashboard";
import NewOpportunity from "./views/NewOpportunity";

export const routes = [
    { path: "/", exact: true, component: Dashboard },
    {
        path: "/new-opportunity",
        exact: true,
        component: NewOpportunity,
    },
];
