import NewOpportunity from "./views/NewOpportunity";
import Confirmation1 from "./views/Confirmation1";
import Confirmation2 from "./views/Confirmation2";
// import Profile from "./views/Profile";
// import SignUp from "./views/SignUp";
import OpportunityCreatedPage from "./views/OpportunityCreatedPage";

export const routes = [
    // { path: "/dashboard", exact: true, component: Dashboard },
    {
        path: "/new-opportunity",
        exact: true,
        component: NewOpportunity,
    },
    // { path: "/profile", exact: true, component: Profile },
    { path: "/confirmation1", exact: true, component: Confirmation1 },
    { path: "/confirmation2", exact: true, component: Confirmation2 },
    // { path: "/signUp", exact: true, component: SignUp },
    // { path: "/", exact: true, component: Login },
    {
        path: "/new-opportunity-created",
        exact: true,
        component: OpportunityCreatedPage,
    },
];
