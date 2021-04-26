import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Field from "../components/common/Field";
import Label from "../components/common/Label";

const StyledTextarea = styled.textarea`
    width: 100%;
    border: 3px solid #cdcdcd;
    box-sizing: border-box;
    border-radius: 24px;
    padding: 10px;
    resize: none;
    font-style: normal;
    font-family: Source Sans Pro;
    ::placeholder {
        color: #cdcdcd;
    }
`;

const StyledWordCount = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    float: right;
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
            <StyledWordCount>
                {num}/{maxChar}
            </StyledWordCount>
        </Field>
    );
};

export default TextareaField;
