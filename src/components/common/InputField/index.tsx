import React from "react";
import { StyledInput } from "./style";
import Field from "../Field";
import Label from "../Label";

const InputField = ({ label, value, placeholder, name, id, onChange }: any) => {
    return (
        <Field>
            <Label htmlFor={id}>{label}</Label>
            <StyledInput name={name} id={id} placeholder={placeholder} />
        </Field>
    );
};

export default InputField;
