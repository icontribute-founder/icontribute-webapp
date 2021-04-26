import styled from "styled-components";

export const StyledButton = styled.button`
    ${({ theme }) => `
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.primary.contrastText};
        border-radius: 24px;
        border: none;
        font-size: ${theme.typography.fontSize};
        font-family: ${theme.typography.fontFamily};
        padding: 10px;
        padding-left: 50px;
        padding-right: 50px;
        &:hover {
            cursor: pointer;
        }
    `}
`;
