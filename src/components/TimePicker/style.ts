import styled from "styled-components";
import { List, ListItemText, ListSubheader } from "@material-ui/core";

export const TimePickerList = styled(List)`
    width: 200px;
    max-height: 327px;
    overflow: auto;
    background-color: #f1f1f2;
`;

export const TimePickerListItemText = styled(ListItemText)`
    text-align: center;
    color: #13394a;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    line-height: 120%;
`;

export const TimePickerListSubheader = styled(ListSubheader)`
    font-size: 24px;
    color: #026896;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    padding: 10px 20px;
    text-align: center;
`;

export const TimePickerListItem = styled.li`
    background-color: inherit;
`;

export const TimePickerListUl = styled.ul`
    background-color: inherit;
    padding: 0;
`;
