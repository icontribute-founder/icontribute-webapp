// import React from "react"

import Dashboard from "./views/Dashboard";
import NewOpportunity from "./views/NewOpportunity";
import Profile from "./views/Profile";
import Confirmation1 from "./views/Confirmation1";
import Confirmation2 from "./views/Confirmation2";
import OpportunityCreatedPage from "./views/OpportunityCreatedPage";

export const routes = [
    { path: "/", exact: true, component: Dashboard },
    {
        path: "/new-opportunity",
        exact: true,
        component: NewOpportunity,
    },
    { path: "/profile", exact: true, component: Profile },
    { path: "/confirmation1", exact: true, component: Confirmation1},
    { path: "/confirmation2", exact: true, component: Confirmation2},
    { path: "/newOpportunityCreated", exact: true, component: OpportunityCreatedPage },

];
