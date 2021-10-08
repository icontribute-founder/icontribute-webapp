import NewOpportunity from "./views/NewOpportunity";
import Confirmation1 from "./views/Confirmation1";
import Confirmation2 from "./views/Confirmation2";
// import Profile from "./views/Profile";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import OpportunityConfirmPage from "./views/OpportunityConfirmPage";
import AccountSettings from "./views/AccountSettings";
import Notifications from "./views/Notifications";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import ReviewOpportunity from "./views/ReviewOpportunity";
import SignUpConfirm from "./views/SignUpConfirm";

export const routes = [
    // { path: "/dashboard", exact: true, component: Dashboard },
    {
        path: "/new-opportunity",
        exact: true,
        component: NewOpportunity,
    },
    {
        path: "/",
        exact: true,
        component: Dashboard,
    },
    { path: "/profile", exact: true, component: Profile },
    { path: "/confirmation1", exact: true, component: Confirmation1 },
    { path: "/confirmation2", exact: true, component: Confirmation2 },
    // { path: "/", exact: true, component: Login },
    {
        path: "/new-opportunity-review",
        exact: true,
        component: ReviewOpportunity,
    },
    {
        path: "/new-opportunity-confirm",
        exact: true,
        component: OpportunityConfirmPage,
    },
    {
        path: "/account-settings",
        exact: true,
        component: AccountSettings,
    },
    {
        path: "/notifications",
        exact: true,
        component: Notifications,
    },
    {
        path: "/signup",
        exact: true,
        component: SignUp,
    },
    {
        path: "/signup-confirm",
        exact: true,
        component: SignUpConfirm,
    },
];
