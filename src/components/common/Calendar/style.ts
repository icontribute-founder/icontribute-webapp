import styled from "styled-components";
import { Box } from "@material-ui/core";

export const CalendarPaper = styled(Box)`
    overflow: hidden;
`;

export const DayWithDotContainer = styled.div`
    position: relative;
`;

export const DateWithDot = styled.div`
    position: absolute;
    height: 0;
    width: 0;
    border: 3px solid;
    border-radius: 5px;
    border-color: #ffbc03;
    right: 45.5%;
    transform: translateX(1px);
    top: 73%;
`;
