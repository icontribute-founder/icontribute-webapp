// import React from "react"

import Dashboard from "./views/Dashboard";
import NewOpportunity from "./views/NewOpportunity";
import Profile from "./views/Profile"

export const routes = [
    { path: "/", exact: true, component: Dashboard },
    {
        path: "/new-opportunity",
        exact: true,
        component: NewOpportunity,
    },
    { path: "/profile", exact: true, component: Profile }
];
