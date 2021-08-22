import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #2836D1;
    padding: 12px 29px;
    margin-top: 10px;
    color: #FBFBFB;
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 24px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
`

const BlueButton = ({ text }: any) => {
    return (
        <StyledButton>{text}</StyledButton>
    )
}

export default BlueButton;