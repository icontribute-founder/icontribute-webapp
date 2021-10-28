import { useEffect, useState } from "react";
import React from "react";

import { useHistory } from "react-router";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import SmallEventCard from "../components/SmallEventCard";
import Button from "../components/common/Button";
import Calendar from "../components/Svgs/CalendarIcon";
import MoreOptions from "../components/MoreOptions";
import Map from "../components/Map";

import config from "../firebaseConfig.json";
import { OpportunityCollection } from "../firebase-access/src/";
import { useJsApiLoader } from "@react-google-maps/api";

const OrganizationDashboard = () => {
  const history = useHistory();

  const [indexes, setIndexes] = useState([false, false]);
  const [opportunities, setOpportunity] = useState([]);

  const defaultIndexesBasedOnOpsLength: boolean[] = [];

  const [positionName, setPositionName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [deadline, setDeadline] = useState("");
  const [address, setEventAddress] = useState("");

  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [repeating, setRepeating] = useState("");

  const [categories, setEventCategories] = useState([]);

  var center1 = {
    lat: 45.42,
    lng: -75.69,
  };

  const [center, setCenter] = useState(center1);

  const handleOnClick = () => {
    history.push("/new-opportunity");
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });

  useEffect(() => {
    const getOpportunity = async () => {
      const opportunityCollection = OpportunityCollection.create(config);
      const data: any = await opportunityCollection.getOpportunities();

      setOpportunity(data);
      console.log(data);
      if (data[0] != null) {
        handleCardOnClick(0, 0, data[0]);
      }
      console.log("Data: ", data);

      for (let i = 0; i < opportunities.length; i++) {
        defaultIndexesBasedOnOpsLength[i] = false;
      }
      setIndexes(defaultIndexesBasedOnOpsLength);
    };
    getOpportunity();
  }, []);

  const handleCardOnClick = (e: any, i: any, props: any) => {
    var dateInfo = new Date(props.date.seconds * 1000);
    var deadlineInfo = new Date(props.deadline.seconds * 1000);

    var center = {
      lat: props.coordinates._lat,
      lng: props.coordinates._long,
    };

    var formatedStartHour = "";
    var formatedEndHour = "";
    var formatedStartMinutes = "";
    var formatedEndMinutes = "";
    var startDate = new Date();
    var endDate = new Date();

    if (props.shift != null && props.shift[0] != null) {
      console.log(startDate);
      startDate = new Date(props.shift[0].start.seconds * 1000);
      endDate = new Date(props.shift[0].end.seconds * 1000);

      startDate.getHours().toString().length === 1
        ? (formatedStartHour = "0" + startDate.getHours())
        : (formatedStartHour = "" + startDate.getHours());
      endDate.getHours().toString().length === 1
        ? (formatedEndHour = "0" + endDate.getHours())
        : (formatedEndHour = "" + endDate.getHours());
      startDate.getMinutes().toString().length === 1
        ? (formatedStartMinutes = "0" + startDate.getMinutes())
        : (formatedStartMinutes = "" + startDate.getMinutes());
      endDate.getMinutes().toString().length === 1
        ? (formatedEndMinutes = "0" + endDate.getMinutes())
        : (formatedEndMinutes = "" + endDate.getMinutes());

      setEventStart(
        startDate.getMonth() +
          "/" +
          startDate.getDate() +
          "/" +
          startDate.getFullYear() +
          " " +
          formatedStartHour +
          ":" +
          formatedStartMinutes
      );
      setEventEnd(
        endDate.getMonth() +
          "/" +
          endDate.getDate() +
          "/" +
          endDate.getFullYear() +
          " " +
          formatedEndHour +
          ":" +
          formatedEndMinutes
      );
      setDate(
        dateInfo.getMonth() +
          "/" +
          dateInfo.getDate() +
          "/" +
          dateInfo.getFullYear()
      );
      setDeadline(
        deadlineInfo.getMonth() +
          "/" +
          deadlineInfo.getDate() +
          "/" +
          deadlineInfo.getFullYear()
      );
      setRepeating(props.shift[0].recurring);
    }

    setPositionName(props.eventName);
    setCompanyName(props.companyName);
    setDescription(props.description);
    setEventAddress(props.address);
    setEventImage(props.eventImage);
    setEventCategories(props.categories);

    setCenter(center);
    const newIndexes = [false, false];
    newIndexes[i] = true;
    setIndexes(newIndexes);
  };

  const ListEventCardComponents = opportunities.map((props: any, i) => (
    <SmallEventCard
      eventImage={props.eventImage}
      eventName={props.eventName}
      date={new Date(props.date.seconds * 1000)}
      description={props.description}
      eventID={props.eventID}
      onClick={(e: any) => handleCardOnClick(e, i, props)}
      selected={indexes[i]}
    ></SmallEventCard>
  ));

  return isLoaded ? (
    <OrganizationDashboardPage>
      <div>
        <HeaderContainer>
          <LeftBox>
            <HeaderOne>Your organization dashboard</HeaderOne>
            <HeaderFour>
              Here you can view the volunteer opportunities you've posted, edit
              them, or create a new one.
            </HeaderFour>
          </LeftBox>
          <RightBox>
            <Button onClick={handleOnClick}>Create a new opportunity</Button>
          </RightBox>
        </HeaderContainer>

        <SignupContainer>
          <Grid container>
            <Grid item xs={6}>
              <EventsListContainer>
                {ListEventCardComponents}
              </EventsListContainer>
            </Grid>

            <Grid item xs={6}>
              <Scolling>
                {eventImage ? (
                  <img
                    src={eventImage}
                    alt="EventImage"
                    width="100%"
                    height="300px"
                  />
                ) : (
                  <></>
                )}

                <TextGroup>
                  <Grid container>
                    <Grid item xs={6}>
                      <HeaderThree> {positionName} </HeaderThree>
                      <HeaderTwo> {companyName} </HeaderTwo>

                      {categories.map((category) => (
                        <Location> {category} </Location>
                      ))}
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      style={{ textAlign: "right", paddingRight: "50px" }}
                    >
                      <MoreOptions></MoreOptions>

                      <SubHeader>
                        <Calendar></Calendar>
                        {date}
                      </SubHeader>
                      <SubHeader>Application Deadline: {deadline} </SubHeader>
                    </Grid>
                  </Grid>
                </TextGroup>

                <TextGroup style={{ paddingTop: "0px" }}>
                  <HeaderTwo>Organization details</HeaderTwo>
                  <Paragraph>{description}</Paragraph>
                </TextGroup>

                <HeaderTwo>Location</HeaderTwo>
                <SubHeader>{address}</SubHeader>
                {center ? <Map center={center}></Map> : <></>}

                <TextGroup>
                  <HeaderTwo>Shift 1</HeaderTwo>

                  <Paragraph>Start: {eventStart} </Paragraph>
                  <Paragraph>End: {eventEnd} </Paragraph>
                  {repeating ? (
                    <Paragraph>Does Not Repeat</Paragraph>
                  ) : (
                    <Paragraph>Repeats</Paragraph>
                  )}
                </TextGroup>

                <HeaderThree>Applicants</HeaderThree>

                <Paragraph>There are no applicants</Paragraph>
              </Scolling>
            </Grid>
          </Grid>
        </SignupContainer>
      </div>
    </OrganizationDashboardPage>
  ) : (
    <></>
  );
};

const HeaderContainer = styled.div`
  font-family: Source Sans Pro;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 2px solid silver;
  margin-top: -1%;
  flex-direction: row;
  width: 1;
  height: 0.3;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 0.5;
  padding-left: 2%;
`;

const RightBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 0.5;
  padding-top: 2%;
  padding-right: 3%;
`;

const HeaderOne = styled.h1`
    font-family: Source Sans Pro;
    font-weight: bold;
    text-align: left";
`;

const HeaderFour = styled.h3`
    font-family: Source Sans Pro;
    text-align: left";
    margin-bottom: -2%;
    margin-bottom: 1%;
`;

const Scolling = styled.div`
  height: 70vh;
  scroll-behaviour: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const SignupContainer = styled.div`
  font-family: Source Sans Pro;
  width: fit-content;
  margin: auto;
  padding: 30px;
`;

const TextGroup = styled.div`
  margin: auto;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const HeaderTwo = styled.p`
  font-weight: bold;
  margin: 0px;
`;

const OrganizationDashboardPage = styled.div`
  height: calc(100% - 85px);
`;

const EventsListContainer = styled.div`
  height: 70vh;
  font-family: Source Sans Pro;
  overflow-y: scroll;
  scroll-behaviour: smooth;
`;

export const Location = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #736b6b;
  margin: 0px 0 0 0;
  display: inline-block;
  padding: 5px;
  padding-left: 0px;
`;

export const SubHeader = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #736b6b;
  margin: 0px 0 0 0;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #192226;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const HeaderThree = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;

  color: #192226;
`;

export default OrganizationDashboard;
