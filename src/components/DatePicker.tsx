import { useState, MouseEvent } from "react";
import styled from "styled-components";
import { Menu, Button } from "@material-ui/core";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Calendar from "./common/Calendar";
import { dataTimePickerCalendarTheme } from "../themes";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

export const DateTimePickerRoot = styled.div`
    width: 100%;
`;

export const DateTimeContainer = styled.div`
    display: flex;
    background-color: #1284b0;
    padding-bottom: 25px;
    border-radius: 30px;
`;

export const DateTimePickerButton = styled(Button)`
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
    padding-left: 10px;
    padding-right: 16px;
`;

const StyledH4 = styled.h4`
    padding: 0px;
    margin: 0px;
    margin-bottom: 10px;
    font-weight: normal;
`;

const useStyles = makeStyles({
    paper: { borderRadius: "30px" },
});

const SmallGrayText = styled.span`
    color: #d3d3d3;
    font-size: 10px;
    text-transform: capitalize;
`;

const DatePicker = ({
    label = "",
    dateTime = new Date().toString(),
    disablePast,
    dateOnChange,
    shouldDisableDate = false,
    showPlaceHolder = false,
}: any) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectDate = (date: Date) => {
        dateOnChange({
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
        });
    };

    return (
        <DateTimePickerRoot>
            {label === "" ? "" : <StyledH4>{label}</StyledH4>}
            <DateTimePickerButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                {showPlaceHolder ? (
                    <SmallGrayText>Choose Date</SmallGrayText>
                ) : (
                    dateTime.toLocaleDateString()
                )}
                <SvgIcon>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.75 0C6.16421 0 6.5 0.335786 6.5 0.75V3H15.5V0.75C15.5 0.335786 15.8358 0 16.25 0C16.6642 0 17 0.335786 17 0.75V3H19.75C20.7165 3 21.5 3.7835 21.5 4.75V20.75C21.5 21.7165 20.7165 22.5 19.75 22.5H2.25C1.2835 22.5 0.5 21.7165 0.5 20.75V4.75C0.5 3.7835 1.2835 3 2.25 3H5V0.75C5 0.335786 5.33579 0 5.75 0ZM2.25 4.5C2.11193 4.5 2 4.61193 2 4.75V8H20V4.75C20 4.61193 19.8881 4.5 19.75 4.5H2.25ZM20 9.5H2V20.75C2 20.8881 2.11193 21 2.25 21H19.75C19.8881 21 20 20.8881 20 20.75V9.5Z"
                        fill="#16161D"
                    />
                </SvgIcon>
            </DateTimePickerButton>
            <Menu
                classes={{ paper: classes.paper }}
                MenuListProps={{
                    style: {
                        padding: 0,
                    },
                }}
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
                </DateTimeContainer>
            </Menu>
        </DateTimePickerRoot>
    );
};

export default DatePicker;
