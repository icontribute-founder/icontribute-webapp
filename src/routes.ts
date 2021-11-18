import Opportunity from "./views/Opportunity";
import Confirmation1 from "./views/Confirmation1";
import Confirmation2 from "./views/Confirmation2";
// import Profile from "./views/Profile";
import SignUp from "./views/SignUp";
import OpportunityConfirmPage from "./views/OpportunityConfirmPage";
import AccountSettings from "./views/AccountSettings";
import Notifications from "./views/Notifications";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import ReviewOpportunity from "./views/ReviewOpportunity";
import SignUpConfirm from "./views/SignUpConfirm";

export const routes = [
  {
    path: "/opportunity/:action",
    exact: true,
    component: Opportunity,
  },
  {
    path: "/",
    exact: true,
    component: Dashboard,
  },
  { path: "/profile", exact: true, component: Profile },
  { path: "/confirmation1", exact: true, component: Confirmation1 },
  { path: "/confirmation2", exact: true, component: Confirmation2 },
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
  //   {
  //     path: "/signup",
  //     exact: true,
  //     component: SignUp,
  //   },
  {
    path: "/signup-confirm",
    exact: true,
    component: SignUpConfirm,
  },
  {
    path: "/organization-dashboard",
    exact: true,
    component: Dashboard,
  },
];
