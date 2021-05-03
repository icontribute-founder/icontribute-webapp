import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {
    Address,
    CompanyName,
    Details,
    EventName,
    StyledButton,
    StyledCard,
    StyledCardMedia,
    StyledDate,
} from "./style";

function getDateString(date: Date) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const [m, d, y] = new Date(date).toLocaleDateString().split("/");

    return `${months[Number(m) - 1]} ${d}, ${y}`;
}

const image =
    "https://www.baywardbulletin.ca/wp-content/uploads/2019/07/Bluesfest-873x436.jpg";

export default function OpportunityCard({ opportunity: content }: any) {
    const { companyName, eventName, subtitle, address, start } = content;
    return (
        <StyledCard>
            <StyledCardMedia image={image} title="Contemplative Reptile" />
            <Details>
                <CardContent>
                    <StyledDate>{getDateString(start)}</StyledDate>
                    <EventName>
                        {eventName} | {subtitle}
                    </EventName>
                    <CompanyName>{companyName}</CompanyName>
                    <Address>{address}</Address>
                </CardContent>
                <CardActions>
                    <StyledButton>View Event</StyledButton>
                </CardActions>
            </Details>
        </StyledCard>
    );
}
