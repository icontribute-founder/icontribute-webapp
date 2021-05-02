import styled from "styled-components";
import { Card, CardMedia } from "@material-ui/core";

export const StyledButton = styled.button`
    background-color: #026896;
    border-radius: 24px;
    &:hover: {
        cursor: pointer;
    }
    color: white;
    border: none;
    font-size: 16px;
    padding: 16px;
    padding-left: 50px;
    padding-right: 50px;
    font-weight: 600;
`;

export const StyledCard = styled(Card)`
    font-family: Source Sans Pro;
    border-radius: 12px;
    display: flex;
    padding: 18px;
    margin: auto;
    width: 100%;
    box-shadow: 0px 4px 20px rgba(80, 80, 80, 0.1);
`;

export const StyledCardMedia = styled(CardMedia)`
    position: relative;
    border-radius: 12px;
    width: 300px;
    max-height: 200px;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -18px;
    margin-left: 20px;
`;

export const Address = styled.p`
    font-size: 16px;
    color: #666666;
`;

export const StyledDate = styled.p`
    font-size: 14px;
    font-weight: 700;
    // margin-bottom: 10px;
    color: #666666;
`;

export const CompanyName = styled.p`
    font-size: 16px;
`;

export const EventName = styled.p`
    weight: 800;
    font-size: 20px;
`;
