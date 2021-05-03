import React from "react";
import { StyledButton } from "./style";

const ThemeButton = ({ text, onClick }: any) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default ThemeButton;
