import React from "react";
import { StyledLabel } from "./style";
import { props } from "./type";

const Label = ({ children, htmlFor }: props) => {
    return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
