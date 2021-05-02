import styled from "styled-components";
import { StyledBackground } from "../WidgetPaper/style";

export const StyledButton = styled.button`
    padding: 15px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.32px;
    color: #5094b9;
    background: #ffffff;
    border: 3px solid #5094b9;
    box-sizing: border-box;
    border-radius: 12px;
    width: 70%;
    :hover {
        cursor: pointer;
    }
`;

export const ShiftName = styled.h3`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 120%;
    margin: 0px;
    color: #133a4b;
`;

export const NewShiftCardBackground = styled(StyledBackground)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;
    padding: 28px;
`;

export const ShiftCardBackground = styled(StyledBackground)`
    height: 220px;
    padding: 28px;
    * {
        margin-bottom: 5px;
    }
`;

export const ShiftHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ShiftContent = styled.div`
    margin-top: 30px;
`;
