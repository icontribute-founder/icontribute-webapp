import { createContext } from "react";

export const intialDashboard = {
    sortBy: "des",
    date: new Date(),
    searchQuery: "",
    opportunityType: "live",
};

// type DashboardContextType = {
//     dashboard: {
//         sortBy: string;
//         date: string;
//         searchQuery: string;
//         opportunityType: string;
//     };
//     setDashboard: React.Dispatch<
//         React.SetStateAction<{
//             sortBy: string;
//             date: string;
//             searchQuery: string;
//             opportunityType: string;
//         }>
//     >;
// };

export const dashboardContext = createContext<any>(null);
