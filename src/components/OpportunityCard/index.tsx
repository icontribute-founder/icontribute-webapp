import React from "react";
// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
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
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             borderRadius: 12,
//             display: "flex",
//             padding: 18,
//             margin: "auto",
//             // maxWidth: 1000,
//             width: "100%",
//             boxShadow: "0px 4px 20px rgba(80, 80, 80, 0.1)",
//         },
//         details: {
//             display: "flex",
//             flexDirection: "column",
//             marginTop: "-18px",
//             marginLeft: "20px",
//         },
//         media: {
//             position: "relative",
//             borderRadius: 12,
//             width: 300,
//             maxHeight: 200,
//         },
//         date: {
//             fontSize: "14px",
//             fontWeight: 600,
//             marginBottom: "10px",
//         },
//         font16: {
//             fontSize: "16px",
//         },

//         font: {
//             fontSize: "20px",
//         },
//         button: {
//             backgroundColor: "#026896",
//             borderRadius: "24px",
//             "&:hover": {
//                 cursor: "pointer",
//             },
//             color: "white",
//             border: "none",
//             fontSize: "16px",
//             padding: "16px",
//             paddingLeft: "50px",
//             paddingRight: "50px",
//             fontWeight: 600,
//         },
//     })
// );

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
