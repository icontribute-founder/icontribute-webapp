import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #D1D2D3;
    padding: 16px 39px;
    margin-top: 135px;
    color: #5E6467;
    opacity: 60%;
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 32px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    cursor: pointer;
`

const GreyButton = ({ onClick, text }: any) => {
    return (
        <StyledButton onClick={onClick}>{text}</StyledButton>
    )
}

export default GreyButton;