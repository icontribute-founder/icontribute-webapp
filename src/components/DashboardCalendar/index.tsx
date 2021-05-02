import React from "react";
import { dashboardCalendarTheme } from "../../themes";
import Calendar from "../common/Calendar";

const DashboardCalendar = ({
    daysHaveOpportunities,
    handleSelectDate,
}: any) => {
    return (
        <Calendar
            daysHaveOpportunities={daysHaveOpportunities}
            theme={dashboardCalendarTheme}
            handleSelectDate={handleSelectDate}
        />
    );
};

export default DashboardCalendar;
