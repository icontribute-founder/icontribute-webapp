import styled from "styled-components";
import Field from "./Field";
import Label from "./Label";

const StaticInputField = ({ label, value, type }: any) => {
    return (
        <Field>
            <Label>{label}</Label>
            <StyledInput type={type} value={value ? value : ""} />
        </Field>
    );
};

export default StaticInputField;

const StyledInput = styled.input`
    width: 100%;
    height: 60px;
    border: 1px solid #babcbd;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px 20px;
    font-style: normal;
    font-family: Source Sans Pro;
    font-size: 16px;
    background-color: rgba(117, 122, 124, 0.08);
    &:focus {
        outline: none;
    }
`;
