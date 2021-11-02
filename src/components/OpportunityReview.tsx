import styled from "styled-components";
import { H3, H4, H5 } from "./styles";
import ShowMoreText from "react-show-more-text";
import { Grid } from "@material-ui/core";
import calendarIcon from "../assets/images/calendarIcon.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import EditableCard from "./EditableCard";

const Title = styled.h3`
    font-weight: bold;
    font-size: 24px;
    margin: 0px;
    margin-bottom: 8px;
`;

const Subtitle = styled.h4`
    font-size: 20px;
    line-height: 28px;
    margin: 0px;
    margin-bottom: 8px;
`;

const Content = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #192226;
    margin: 0px;
`;

const DeadlineLabel = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #5e6467;
    margin-right: 6px;
`;

const DeadlineValue = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: #192226;
`;

const BasicDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 6px;
`;

const TimeText = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 114%;
    display: flex;
    align-items: center;
    color: #757a7c;
`;

const Deadline = () => {
    const { deadline } = useSelector(
        (state: RootState) => state.newOpportunity
    );
    const date = new Date(deadline);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return (
        <div>
            <DeadlineLabel>Application Deadline:</DeadlineLabel>
            <DeadlineValue>{`${month} ${day}, ${year}`}</DeadlineValue>
        </div>
    );
};

const ShiftCard = ({ start, end, recurrence, i }: any) => {
    return (
        <EditableCard>
            <H4>Shift{i + 1}</H4>
            <p>Start: {new Date(start).toDateString()}</p>
            <p>End: {new Date(end).toDateString()}</p>
            <p>{recurrence}</p>
        </EditableCard>
    );
};

const Summary = () => {
    const { eventName, description, shift, eventImage } = useSelector(
        (state: RootState) => state.newOpportunity
    );

    return (
        <EditableCard>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <img
                        width="211px"
                        height="118px"
                        alt="complex"
                        src={`https://${eventImage}`}
                        style={{ borderRadius: "8px" }}
                    />
                </Grid>
                <Grid item md={5}>
                    <BasicDetails>
                        <H3>{eventName}</H3>
                        <div style={{ marginTop: "52px" }}>
                            <TimeText>
                                <img
                                    src={calendarIcon}
                                    alt="calendarIcon"
                                    style={{ marginRight: "6px" }}
                                />
                                June 18, 2021
                            </TimeText>
                            <Deadline />
                        </div>
                    </BasicDetails>
                </Grid>
                <Grid item md={4}>
                    <H5>Categories</H5>
                </Grid>
                <Grid item xs={12}>
                    <H4>Opportunity Details</H4>
                    <ShowMoreText lines={3} more="Show more" less="Show less">
                        {description}
                    </ShowMoreText>
                </Grid>
                <Grid item xs={12}>
                    <H4>Location</H4>
                </Grid>
                {shift.map(({ start, end, recurring }: any, i) => (
                    <Grid item xs={6} key={`shift-card-${i}`}>
                        <ShiftCard
                            start={start}
                            end={end}
                            i={i}
                            recurrence={recurring}
                        />
                    </Grid>
                ))}
            </Grid>
        </EditableCard>
    );
};

const OpportunityReview = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <EditableCard>
                    <Title>Application Details</Title>
                    <Subtitle>iContribute</Subtitle>
                    <Content>
                        Choose to receive applications through iContribute, and
                        we’ll store all the opportunity details and provide
                        applicants you email address.
                    </Content>
                </EditableCard>
            </Grid>
            <Grid item xs={12}>
                <Summary />
            </Grid>
        </Grid>
    );
};

export default OpportunityReview;
