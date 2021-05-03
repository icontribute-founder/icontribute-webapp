export const dataTimePickerCalendarTheme = {
    overrides: {
        MuiPickersCalendar: {
            week: {
                padding: 5,
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                padding: "0px 6px",
                color: "white",
                body1: {
                    fontWeight: 800,
                },
            },
            daysHeader: {
                padding: "0px 14px",
            },
            dayLabel: {
                color: "white !important",
            },
            iconButton: {
                backgroundColor: "inherit",
                color: "white",
            },
        },
        MuiPickersDay: {
            day: {
                color: "white",
            },
            daySelected: {
                backgroundColor: "#FFBC03",
                "&:hover": {
                    backgroundColor: "#FFBC03",
                },
            },
            dayDisabled: {
                color: "#FFBC03",
            },
            current: {
                color: "#FFBC03",
            },
        },
    },
};

export const dashboardCalendarTheme = {
    overrides: {
        MuiPickersCalendar: {
            week: {
                padding: 0,
            },
        },
        MuiPickersDay: {
            day: {
                color: "black",
            },
            daySelected: {
                backgroundColor: "#FFBC03",
                "&:hover": {
                    backgroundColor: "#FFBC03",
                },
            },
            dayDisabled: {
                color: "#FFBC03",
            },
            current: {
                color: "#FFBC03",
            },
        },
        // MuiTypography: {
        //     caption: {
        //         color: "black !important",
        //     },
        //     body1: {
        //         fontWeight: 800,
        //     },
        // },
        MuiPickersCalendarHeader: {
            switchHeader: {
                padding: "0px 6px",
                color: "black",
                fontWeight: 800,
            },
            daysHeader: {
                padding: "0px 14px",
            },
            dayLabel: {
                color: "black !important",
            },
            iconButton: {
                backgroundColor: "inherit",
                color: "black",
            },
        },
    },
};
