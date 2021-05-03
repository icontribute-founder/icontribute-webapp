import React from "react";
import { StyledField } from "./style";
import { props } from "./type";

const Field = ({ children }: props) => {
    return <StyledField>{children}</StyledField>;
};

export default Field;
