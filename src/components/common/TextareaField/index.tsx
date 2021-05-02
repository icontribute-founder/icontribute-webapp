import React from "react";
import { useState } from "react";
import Field from "../Field";
import Label from "../Label";
import { StyledTextarea, StyledWordCount } from "./style";

const TextareaField = ({
    label,
    value,
    placeholder,
    maxChar,
    numChar,
    rows,
    name,
    id,
    onChange,
}: any) => {
    const [num, setNum] = useState(numChar);
    const onChange1 = (e: any) => {
        const text = e.target.value;
        const count = text.split(" ").filter((s: string) => s !== "").length;
        setNum(count);
    };
    return (
        <Field>
            <Label htmlFor={id}>{label}</Label>
            <StyledTextarea
                name={name}
                id={id}
                rows={rows}
                placeholder={placeholder}
                onChange={onChange1}
            />
            <StyledWordCount>
                {num}/{maxChar}
            </StyledWordCount>
        </Field>
    );
};

export default TextareaField;
