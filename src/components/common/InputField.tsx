import { ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    margin: 30px 0px;
`;

interface InputProps {
    fullWidth?: boolean;
    hasError?: boolean;
}

const Input = styled.input<InputProps>(
    ({
        fullWidth = false,
        hasError = false,
        theme: {
            main: { fontFamily, input, label },
        },
    }) => `
        display: block;
        border-bottom: 1px solid #757575;
        width: ${fullWidth ? "100%" : "auto"};
        height: 48px;
        border: 1px solid ${hasError ? label.color.error : "#babcbd"};
        box-sizing: border-box;
        border-radius: 8px;
        padding: 18px 18px 15px 15px;
        font-style: normal;
        font-family: ${fontFamily};
        font-size: 16px;
        color: ${input.color};
        background-color: ${input.backgroundColor.default};

        // &:hover {
        //     background-color: ${input.backgroundColor.hover};
        // }

        &:focus {
            outline: none;
            border-color: ${hasError ? label.color.error : "#2836d1"};
        }
    `
);

const TextArea = styled.textarea<InputProps>(
    ({
        fullWidth = false,
        hasError = false,
        theme: {
            main: { fontFamily, input, label },
        },
    }) => `
        display: block;
        border-bottom: 1px solid #757575;
        width: ${fullWidth ? "100%" : "auto"};
        height: auto;
        border: 1px solid ${hasError ? label.color.error : "#babcbd"};
        box-sizing: border-box;
        border-radius: 8px;
        padding: 18px 18px 15px 15px;
        font-style: normal;
        font-family: ${fontFamily};
        font-size: 16px;
        color: ${input.color};
        background-color: ${input.backgroundColor.default};

        // &:hover {
        //     background-color: ${input.backgroundColor.hover};
        // }

        &:focus {
            outline: none;
            border-color: ${hasError ? label.color.error : "#2836d1"};
        }
    `
);

const getFocusStyle = (color: string) => `
        left: 10px;
        top: 0px;
        font-size: 14px;
        color: ${color};
        background-color: #fefeff;
        padding: 0 3px;
        border-radius: 4px;
        font-weight: 500;
    `;

interface LabelProps {
    hasContent?: boolean;
    hasError?: boolean;
}

const Label = styled.label<LabelProps>(
    ({
        hasContent = false,
        hasError = false,
        theme: {
            main: { fontFamily, label },
        },
    }) => `
        color: ${hasError ? label.color.error : label.color.default};
        font-family: ${fontFamily};
        font-size: 16px;
        font-weight: 400;
        position: absolute;
        margin: 0;
        position: absolute;
        top: ${hasError ? "33%" : "50%"};
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 16px;
        pointer-events: none;

        ${Input}:focus ~ & {
            ${getFocusStyle(hasError ? label.color.error : label.color.focus)}
        }

        ${TextArea}:focus ~ & {
            ${getFocusStyle(hasError ? label.color.error : label.color.focus)}
        }

        ${
            hasContent
                ? getFocusStyle(hasError ? label.color.error : "#192226")
                : ""
        }
    `
);

const ErrorMessage = styled.span`
    margin-left: 10px;
    color: ${(props) => props.theme.main.label.color.error};
    font-size: 12px;
    line-height: 24px;
`;

interface InputFieldProps {
    label: string;
    value: string;
    placeholder?: string;
    name?: string;
    id: string;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    checkMarkVisible?: boolean;
    errorMessage?: string;
    type?: string;
    fullWidth?: boolean;
    rows?: number;
    cols?: number;
}

const InputField = ({
    label,
    value,
    placeholder = "",
    name,
    id,
    onChange,
    checkMarkVisible,
    errorMessage = "",
    type,
    fullWidth = false,
    rows,
    cols,
}: InputFieldProps) => (
    <Wrapper>
        {type === "textarea" ? (
            <TextArea
                rows={rows}
                cols={cols}
                value={value}
                onChange={onChange}
                id={id}
                placeholder={placeholder}
                name={name}
                fullWidth={fullWidth}
                hasError={errorMessage !== ""}
            />
        ) : (
            <Input
                value={value}
                onChange={onChange}
                id={id}
                placeholder={placeholder}
                type={type}
                name={name}
                fullWidth={fullWidth}
                hasError={errorMessage !== ""}
            />
        )}

        <Label
            htmlFor={id}
            hasContent={value !== "" || placeholder !== ""}
            hasError={errorMessage !== ""}
        >
            {label}
        </Label>
        {errorMessage !== "" ? <ErrorMessage>{errorMessage}</ErrorMessage> : ""}
    </Wrapper>
);

export default InputField;
