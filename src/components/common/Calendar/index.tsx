import React from "react";
import { useStaticState, Calendar as CalendarUI } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/core";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { CalendarPaper, DateWithDot, DayWithDotContainer } from "./style";

const Calendar = ({
    daysHaveOpportunities,
    selectedDate,
    shouldDisableDate,
    handleSelectDate,
    theme = null,
    disablePast = false,
}: any) => {
    const handleDateChange = (date: any) => {
        handleSelectDate(date.toDate());
    };

    const { pickerProps, wrapperProps } = useStaticState({
        value: selectedDate,
        onChange: handleDateChange,
    });

    function renderDay(
        date: MaterialUiPickersDate,
        _: MaterialUiPickersDate,
        dayInCurrentMonth: boolean,
        dayComponent: JSX.Element
    ): JSX.Element {
        if (
            date && // date is not null
            dayInCurrentMonth && // current month
            // the date has at least one opportunity
            daysHaveOpportunities.includes(
                new Date(date.toDate()).toDateString()
            )
        ) {
            return (
                <DayWithDotContainer>
                    {dayComponent}
                    <DateWithDot />
                </DayWithDotContainer>
            );
        }
        return dayComponent;
    }

    const calendar = (
        <CalendarPaper>
            <CalendarUI
                {...pickerProps}
                renderDay={renderDay}
                disablePast={disablePast}
                shouldDisableDate={shouldDisableDate}
            />
        </CalendarPaper>
    );

    if (theme === null) {
        return calendar;
    }

    return <ThemeProvider theme={{ ...theme }}>{calendar}</ThemeProvider>;
};

export default Calendar;
