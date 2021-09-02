import styled from "styled-components";
import Field from "./Field";
import Label from "./Label";
import InputIcon from "../../assets/images/check-mark.png";
import { useState } from "react";

const InputField = ({ label, value, placeholder, name, id, onChange, checkMarkVisible, errorVisible }: any) => {

    return (
        <Field>
            <Label htmlFor={id}>{label}</Label>
            <StyledInput name={name} id={id} placeholder={placeholder} onChange={onChange} />
            <div style={{ display: checkMarkVisible ?? "none" }}>
                <StyledFormIcon />
            </div>
            <div style={{ display: errorVisible ?? "none" }}>
                <StyledError>Passwords don't match</StyledError>
            </div>
        </Field >
    );
};

export default InputField;

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

const StyledFormIcon = styled.img`
    position: absolute;
    right: 24px;
    top: 30px;
`

StyledFormIcon.defaultProps = {
    src: InputIcon
}

const StyledError = styled.span`
    position: absolute;
    right: 24px;
    top: 28px;
    color: #D63334;
    font-size: 12px;
    line-height: 18px;

`