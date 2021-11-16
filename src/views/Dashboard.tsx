import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import SmallEventCard from "../components/SmallEventCard";
import Button from "../components/common/Button";
import Calendar from "../components/Svgs/CalendarIcon";
import MoreOptions from "../components/MoreOptions";
import Map from "../components/Map";
import EmptyDashboard from "./EmptyDashboard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getOpportunities, selectOpportunity } from "../features/opportunities";
import { setAction, setExistingOpportunity } from "../features/opportunity";

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const { loading, opportunities, indexSelected, error } = useSelector(
    (state: RootState) => state.opportunities
  );

  if (opportunities.length > 0) {
    console.log("Volunteer Oppotunities: ", opportunities);
    dispatch(setExistingOpportunity(opportunities[indexSelected]));
  }

  const [center, setCenter] = useState({
    lat: 45.42,
    lng: -75.69,
  });

  const handleOnClick = () => {
    dispatch(setExistingOpportunity(null));
    dispatch(setAction("create"));
    history.push("/opportunity/create");
  };

  const { isLoaded: isMapLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });

  const handleCardOnClick = (e: any, i: number, props: any) => {
    dispatch(selectOpportunity(i));
    setCenter({
      lat: props.coordinates.latitude,
      lng: props.coordinates.longitude,
    });
  };

  useEffect(() => {
    dispatch(getOpportunities());
  }, [dispatch]);

  if (loading || error !== null) return "";

  if (opportunities.length === 0) {
    return <EmptyDashboard />;
  }

  const formatDateTime = (date: Date) => {
    const appendZero = (n: number) =>
      n < 10 ? "0" + n.toString() : n.toString();

    return `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()} ${appendZero(
      date.getHours()
    )}:${appendZero(date.getMinutes())}`;
  };

  const formatDate = (date: Date) =>
    `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  const ListEventCardComponents = opportunities.map((props: any, i: number) => {
    const { eventName, eventImage, date, description, eventID } = props;
    return (
      <SmallEventCard
        key={eventID}
        eventImage={eventImage}
        eventName={eventName}
        date={new Date(date)}
        description={description}
        eventID={eventID}
        onClick={(e: any) => handleCardOnClick(e, i, props)}
        selected={i === indexSelected}
      />
    );
  });

  const {
    eventName,
    companyName,
    description,
    address,
    eventImage,
    categories,
    shift,
    deadline,
    date,
  } = opportunities[indexSelected];

  let eventImageUrl = "";
  if (eventImage && typeof eventImage === "string") {
    eventImageUrl = eventImage;
  }

  const header = (
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
  );

  const selectedOpportunityView = (
    <SelectedOpportunity>
      {eventImage ? (
        <StyledImage src={eventImageUrl} alt="EventImage" />
      ) : (
        <></>
      )}

      <TextGroup>
        <Grid container>
          <Grid item xs={6}>
            <HeaderThree>{eventName}</HeaderThree>
            <HeaderTwo>{companyName}</HeaderTwo>

            {categories.map((category: any, i: number) => (
              <Location key={`category-${i}`}> {category} </Location>
            ))}
          </Grid>

          <Grid
            item
            xs={6}
            style={{
              textAlign: "right",
              paddingRight: "50px",
            }}
          >
            <MoreOptions />
            <SubHeader>
              <Calendar />
              {formatDate(new Date(date))}
            </SubHeader>
            <SubHeader>
              Application Deadline: {formatDate(new Date(deadline))}
            </SubHeader>
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

      {shift.map((s: any, i: number) => (
        <TextGroup key={`dashboard-shift-${i}`}>
          <HeaderTwo>Shift {i + 1}</HeaderTwo>
          <Paragraph>Start: {formatDateTime(new Date(s.start))}</Paragraph>
          <Paragraph>End: {formatDateTime(new Date(s.end))}</Paragraph>
          {s.repeating ? (
            <Paragraph>Repeats</Paragraph>
          ) : (
            <Paragraph>Does Not Repeat</Paragraph>
          )}
        </TextGroup>
      ))}

      <HeaderThree>Applicants</HeaderThree>

      <Paragraph>There are no applicants</Paragraph>
    </SelectedOpportunity>
  );

  return isMapLoaded ? (
    <OrganizationDashboardPage>
      {header}
      <SignupContainer>
        <Grid container>
          <Grid item xs={6}>
            <EventsListContainer>{ListEventCardComponents}</EventsListContainer>
          </Grid>

          <Grid item xs={6}>
            {selectedOpportunityView}
          </Grid>
        </Grid>
      </SignupContainer>
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

const SelectedOpportunity = styled.div`
  padding: 0px 14px;
  height: 75vh;
  background-color: white;
  scroll-behaviour: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const SignupContainer = styled.div`
  font-family: Source Sans Pro;
  width: fit-content;
  margin: auto;
  background: rgba(117, 122, 124, 0.08);
  overflow-y: hidden;
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

const StyledImage = styled.img`
  margin-top: 12px;
  width: 100%;
  height: 300px;
  border-radius: 8px 8px 0px 0px;
`;

const EventsListContainer = styled.div`
  height: 75vh;
  font-family: Source Sans Pro;
  overflow-y: scroll;
  overflow-x: hidden;
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

export default Dashboard;
