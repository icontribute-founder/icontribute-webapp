import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #2836d1;
    padding: 16px 39px;
    margin-top: 135px;
    color: #fefeff;
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 24px;
    font-weight: 700;
    // letter-spacing: 1px;
    line-height: 32px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    &:disabled {
        background-color: #d1d2d3;
        color: #5e6467;
        cursor: default;
        opacity: 60%;
    }
`;
const StyledActiveButton = styled.button`
    background-color: #2836d1;
    padding: 16px 39px;
    margin-top: 135px;
    color: #fefeff;
    opacity: 60%;
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 24px;
    font-weight: 700;
    // letter-spacing: 1px;
    line-height: 32px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    cursor: pointer;
`;

const GreyButton = ({ onClick, text, disabled }: any) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {text}
        </StyledButton>
    );
};

export default GreyButton;
