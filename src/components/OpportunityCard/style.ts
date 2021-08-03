import styled from "styled-components";
import { Button, Card, CardMedia } from "@material-ui/core";

export const StyledButton = styled(Button)`
    background-color: #2836D1;
    border-radius: 8px;
    &:hover {
        background-color: #2836D1;
    }
    font-family: DM Sans;
    font-style: bold;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #ffffff;
    padding: 16px 25px;
    text-transform: capitalize;
`;

export const StyledShareButton = styled(Button)`
    background-color: #EDECFF;
    border-radius: 8px;
    &:hover {
        background-color: #EDECFF;
    }
    font-family: DM Sans;
    font-style: bold;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #2836D1;
    padding: 16px 90px;
    text-transform: capitalize;
`;

export const StyledCard = styled(Card)`
    font-family: Source Sans Pro;
    border-radius: 12px;
    display: flex;
    padding: 18px;
    margin: auto;
    width: 100%;
    box-shadow: 0px 4px 20px rgba(80, 80, 80, 0.06);
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
    margin-top: -20px;
    margin-left: 20px;
`;

export const Address = styled.p`
    font-size: 16px;
    color: #666666;
    padding: 0px;
    margin: 0px;
`;

export const StyledDate = styled.p`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: #666666;
`;

export const CompanyName = styled.p`
    font-size: 16px;
    padding: 0px;
    margin: 0px;
`;

export const EventName = styled.p`
    font-weight: 700;
    font-size: 20px;
`;
