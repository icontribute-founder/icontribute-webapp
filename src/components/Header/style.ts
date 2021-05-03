import { AppBar, InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)`
    background-color: white;
    padding-top: 5px;
    color: black;
    box-shadow: 0px 4px 50px rgba(48, 48, 48, 0.08);
    padding: 4px;
`;

export const Logo = styled.div`
    cursor: pointer;
`;

export const StyledLink = styled(Link)`
    ${({ theme }) => `
        color: black;
        font-family: ${theme.typography.fontFamily};
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        height: fit-content;
        align-self: center;
        border-bottom: 3px solid ${theme.palette.primary.main};
        text-decoration: none;
        margin-right: 3em;
    `}
`;

export const StyledImage = styled.img`
    border-radius: 24px;
    cursor: pointer;
`;

export const H1 = styled.h1`
    ${({ theme }) => `
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        color: ${theme.palette.primary.main};
        font-size: 36px;
        margin: 0;
    `}
`;

export const H3 = styled.h3`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    margin: 0;
    color: #736b6b;
    margin-bottom: 2px;
`;

export const FlexGrow = styled.div`
    flex-grow: 1;
`;

export const ToolbarContainer = styled.div`
    ${({ theme }) => `
        display: none;
        ${theme.breakpoints.up("md")} {
            display: flex;
        }
    `}
`;

export const SearchContainer = styled.div`
    ${({ theme }) => `
        position: relative;
        left: 25px;
        margin-bottom: 0px;
        ${theme.breakpoints.up("sm")} {
            margin-left: ${theme.spacing(3)};
        }
    `}
`;

export const SearchIconContainer = styled.div`
    ${({ theme }) => `
        padding: ${theme.spacing(0, 2)};
        height: 100%;
        position: absolute;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    `}
`;

export const SytledInputBase = styled(InputBase)`
    ${({ theme }) => `
        // padding: ${theme.spacing(1, 1, 1, 1)} !important;
        width: 40vw;
        max-width: 680px;
        padding-left: calc(1em + ${theme.spacing(4)}px);
        background-color: #e7ebef;
        border-radius: 24px;
        height: 38px;
        color: inherit;
    `}
`;
