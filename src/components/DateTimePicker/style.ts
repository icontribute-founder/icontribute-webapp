import styled from "styled-components";
import { Button } from "@material-ui/core";

export const DateTimePickerRoot = styled.div`
    width: 100%;
`;

export const DateTimeContainer = styled.div`
    display: flex;
    background-color: #1284b0;
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
`;
