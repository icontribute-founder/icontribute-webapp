import React from "react";
import styled from "styled-components";
import Field from "./Field";
import Label from "./Label";

const StyledInput = styled.input`
    width: 100%;
    height: 60px;
    border: 1px solid #BABCBD;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px 20px;
    font-style: normal;
    font-family: Source Sans Pro;
    font-size: 16px;
    ::placeholder {
        color: #cdcdcd;
    }
    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px #2836D1;
    }
`;

const InputField = ({ label, value, placeholder, name, id, onChange }: any) => {
    return (
        <Field>
            <Label htmlFor={id}>{label}</Label>
            <StyledInput name={name} id={id} placeholder={placeholder} />
        </Field>
    );
};

export default InputField;