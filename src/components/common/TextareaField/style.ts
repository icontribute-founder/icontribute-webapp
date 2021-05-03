import styled from "styled-components";

export const StyledTextarea = styled.textarea`
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

export const StyledWordCount = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    float: right;
`;
