import styled from "styled-components";
import { Button } from "@material-ui/core";

// export const StyledButton = styled.button`
//     ${({ theme }) => `
//         background-color: ${theme.palette.primary.main};
//         color: ${theme.palette.primary.contrastText};
//         border-radius: 24px;
//         border: none;
//         font-size: ${theme.typography.fontSize};
//         font-family: ${theme.typography.fontFamily};
//         padding: 10px;
//         padding-left: 50px;
//         padding-right: 50px;
//         &:hover {
//             cursor: pointer;
//         }
//     `}
// `;

export const StyledButton = styled(Button)`
    ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
        border-radius: 24px;
        &:hover {
            background-color: ${theme.palette.primary.main};
        }
        font-family: ${theme.typography.fontFamily};
        font-style: normal;
        font-weight: 600;
        font-size: ${theme.typography.fontSize};
        text-align: center;
        color: #ffffff;
        padding: 9px 32px;
        text-transform: capitalize;
    `}
`;
