import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Field from "./Field";
import Label from "./Label";

const StyledTextarea = styled.textarea`
    width: 100%;
    border: 1px solid #BABCBD;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 12px;
    resize: none;
    font-size: 16px;
    font-style: normal;
    font-family: Source Sans Pro;
    ::placeholder {
        color: #cdcdcd;
    }
    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px #2836D1;
    }
`;

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
        </Field>
    );
};

export default TextareaField;