import { ButtonBase } from "@material-ui/core";
import styled from "styled-components";

export const CardBase = styled.div`
    padding: 16px;
    border-radius: 4px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.05))
        drop-shadow(0px 25px 35px rgba(0, 0, 0, 0.03));
    background: #fefeff;
    font-family: Source Sans Pro;
    position: relative;
`;

export const H3 = styled.h3`
    margin: 0px;
`;

export const H4 = styled.h4`
    margin: 0px;
`;

export const H5 = styled.h5`
    margin: 0px;
`;

export const LightBlueButton = styled.button`
    font-family: Source Sans Pro;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;

    width: 59px;
    height: 40px;

    background: #edecff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    border: none;

    &: hover {
        cursor: pointer;
    }

    color: #2836d1;
`;

export const BlueButton = styled(LightBlueButton)`
    background: #2836d1;
    color: #fefeff;
`;

export const Subtitle = styled.p`
    font-family: Source Sans Pro;
    font-weight: normal;
    // font-size: 14px;
    line-height: 143%;
    color: #676767;
    margin-top: 0px;
`;
