import React, { useState, MouseEvent } from "react";
import styled from "styled-components";
import { Button, Menu } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import TimePicker from "./TimePicker";
import Calendar from "./common/Calendar";
import { dataTimePickerCalendarTheme } from "../themes";

const DateTimePickerRoot = styled.div`
    width: 100%;
`;

const DateTimeContainer = styled.div`
    display: flex;
    background-color: #1284b0;
`;

const DateTimePickerButton = styled(Button)`
    width: 100%;
    border: 3px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px;
    * {
        margin: 0px !important;
    }
`;

const DateTimePicker = ({
    dateTime,
    disablePast,
    dateOnChange,
    timeOnChange,
    shouldDisableDate,
    shouldDisableTime,
    timePickerStart,
    timePickerEnd,
    timePickerGap,
    style,
}: any) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectTime = (time: string) => {
        const ds = time.split(":");
        timeOnChange({
            hour: parseInt(ds[0]),
            min: parseInt(ds[1]),
        });
        handleClose();
    };

    const handleSelectDate = (date: Date) => {
        dateOnChange({
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
        });
    };

    const getTime = (date: Date) => {
        return convert24To12(date.getHours(), date.getMinutes());
    };

    const getDayString = (date: Date) => {
        const ds = date.toDateString().split(" ");
        const dateValue = parseInt(ds[2]);
        let ext = "th";
        switch (dateValue % 10) {
            case 1:
                ext = "st";
                break;
            case 2:
                ext = "nd";
                break;
            case 3:
                ext = "rd";
                break;
            default:
                break;
        }
        return `${ds[0]}, ${ds[1]} ${dateValue}${ext}`;
    };

    return (
        <DateTimePickerRoot style={style}>
            <DateTimePickerButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                {getDateString(dateTime)}, {getTime(dateTime)}
                <ExpandMoreIcon style={{ margin: "0px" }} />
            </DateTimePickerButton>
            <Menu
                MenuListProps={{ style: { padding: 0, borderRadius: "20px" } }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                id="simple-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <DateTimeContainer>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Calendar
                            daysHaveOpportunities={[]}
                            theme={dataTimePickerCalendarTheme}
                            selectedDate={dateTime}
                            handleSelectDate={handleSelectDate}
                            disablePast={disablePast}
                            shouldDisableDate={shouldDisableDate}
                        />
                    </MuiPickersUtilsProvider>
                    <TimePicker
                        dateString={getDayString(dateTime)}
                        start={timePickerStart}
                        end={timePickerEnd}
                        gap={timePickerGap}
                        handleSelectTime={handleSelectTime}
                        selectedTime={getTime(dateTime)}
                        shouldDisableTime={shouldDisableTime}
                    />
                </DateTimeContainer>
            </Menu>
        </DateTimePickerRoot>
    );
};

function convert24To12(hour: number, min: number) {
    if (hour < 12) {
        return `${hour}:${min < 10 ? 0 : ""}${min} AM`;
    }
    if (hour === 12) {
        return `12:${min < 10 ? 0 : ""}${min} PM`;
    }
    const hourMod = hour % 12;
    return `${hourMod < 10 ? 0 : ""}${hourMod}:${min < 10 ? 0 : ""}${min} PM`;
}

function getDateString(date: Date) {
    const year = date.getFullYear().toString().substr(2);
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return `${month}/${day}/${year}`;
}

export default DateTimePicker;
