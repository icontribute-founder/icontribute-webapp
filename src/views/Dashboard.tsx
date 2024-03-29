import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Grid, MenuItem, Select } from "@material-ui/core";
import SmallEventCard from "../components/SmallEventCard";
import Button from "../components/common/Button";
import AlertComponent from "../components/Alert/AlertComponent";
import MoreOptions from "../components/MoreOptions";
import Map from "../components/Map";
import EmptyDashboard from "./EmptyDashboard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  getOpportunitiesByIds,
  selectOpportunity,
} from "../features/opportunities";
import {
  reset,
  setAction,
  setExistingOpportunity,
} from "../features/opportunity";
import { HostingType } from "@icontribute-founder/firebase-access";
import loadinggif from "../assets/images/loading.gif";
import Demo_Photo2 from "../assets/images/Demo_Photo2.png";
import StaticChip from "../components/StaticChip";
import { nextTick } from "process";

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, opportunities, indexSelected, error } = useSelector(
    (state: RootState) => state.opportunities
  );

  const { userProfile } = useSelector((state: RootState) => state.user);
  const [showAlert, setShowAlert] = useState(false);
  const [opportunitiesFilter, setOpportunitiesFilter] = useState("upcoming");
  const [hideOpDetails, setHideOpDetails] = useState(true);

  if (opportunities.length > 0) {
    dispatch(setExistingOpportunity(opportunities[indexSelected]));
  }

  const [center, setCenter] = useState({
    lat: 45.42,
    lng: -75.69,
  });

  const handleOnClick = () => {
    if (userProfile.verified) {
      dispatch(setExistingOpportunity(null));
      dispatch(setAction("create"));
      history.push("/opportunity/create");
      dispatch(reset());
    } else {
      setShowAlert(true);
    }
  };

  const handleCardOnClick = (e: any, i: number, props: any) => {
    setHideOpDetails(false);
    dispatch(selectOpportunity(i));
    setCenter({
      lat: props.coordinates.latitude,
      lng: props.coordinates.longitude,
    });
  };

  useEffect(() => {
    dispatch(getOpportunitiesByIds({ eventIds: userProfile.event }));
  }, []);

  if (error !== null) return "";

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50%",
        }}
      >
        <img src={loadinggif} alt="loading..." />
      </div>
    );
  }

  if (opportunities.length === 0) {
    return <EmptyDashboard />;
  }

  if (indexSelected >= opportunities.length) {
    dispatch(selectOpportunity(0));
    return <></>;
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

  const getFilteredOpportunities = (filterOpt: string): any => {
    return opportunities.map((props: any, i: number) => {
      const { eventName, eventImage, dateCreated, description, eventID } =
        props;
      if (
        filterOpt == "upcoming" &&
        Date.parse(new Date(dateCreated).toLocaleDateString()) <
          Date.parse(new Date(Date.now()).toLocaleDateString())
      ) {
        return "";
      } else if (
        filterOpt == "past" &&
        Date.parse(new Date(dateCreated).toLocaleDateString()) >=
          Date.parse(new Date(Date.now()).toLocaleDateString())
      ) {
        return "";
      } else {
        return (
          <SmallEventCard
            key={eventID}
            eventImage={eventImage}
            eventName={eventName}
            date={new Date(dateCreated)}
            description={description}
            eventID={eventID}
            onClick={(e: any) => handleCardOnClick(e, i, props)}
            selected={i === indexSelected}
          />
        );
      }
    });
  };

  const {
    eventName,
    companyName,
    description,
    requirements,
    proofOfVaccination,
    driversLicense,
    minimumAge,
    role,
    notes,
    address,
    eventImage,
    categories,
    shift,
    deadline,
    date,
    dateCreated,
    url,
    type,
  } = opportunities[indexSelected];

  let eventImageUrl = "";
  if (eventImage && typeof eventImage === "string") {
    eventImageUrl = eventImage;
  }

  const handleFilterChange = (event: any) => {
    setOpportunitiesFilter(event.target.value);
  };

  const header = (
    <HeaderContainer>
      <LeftBox>
        <HeaderOne>Your organization dashboard</HeaderOne>
        {showAlert ? (
          <AlertComponent />
        ) : (
          <HeaderFour>
            Here you can view the volunteer opportunities you've posted, edit
            them, or create a new one.
          </HeaderFour>
        )}
        <Select value={opportunitiesFilter} onChange={handleFilterChange}>
          <MenuItem value="upcoming">Upcoming</MenuItem>
          <MenuItem value="past">Past</MenuItem>
        </Select>
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
        <StyledImage src={Demo_Photo2} alt="DefaultEventImage" />
      )}

      <TextGroup>
        <Grid container>
          <Grid item xs={6}>
            <BlueHeaderThree>{eventName}</BlueHeaderThree>
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
              Date Created: {formatDate(new Date(dateCreated))}
            </SubHeader>
            <SubHeader>
              Application Deadline: {formatDate(new Date(deadline))}
            </SubHeader>
          </Grid>
        </Grid>
        <hr />
      </TextGroup>

      <TextGroup style={{ paddingTop: "0px" }}>
        <HeaderTwo>Mandatory Requirements</HeaderTwo>
        {proofOfVaccination ? (
          <StaticChip label="Proof of Vaccination"></StaticChip>
        ) : (
          ""
        )}
        {driversLicense ? (
          <StaticChip label="Driving License"></StaticChip>
        ) : (
          ""
        )}
        {minimumAge ? (
          <StaticChip label={"Minimum Age: " + minimumAge + "+"}></StaticChip>
        ) : (
          ""
        )}
        <Paragraph>{requirements}</Paragraph>
      </TextGroup>

      <TextGroup style={{ paddingTop: "0px" }}>
        <HeaderTwo>Application details</HeaderTwo>
        {type === HostingType.External ? (
          <Paragraph>
            Through external website (
            <a target="parent" href={"//" + url}>
              {url}
            </a>
            ){" "}
          </Paragraph>
        ) : (
          <Paragraph>Through iContribute Application</Paragraph>
        )}
      </TextGroup>

      <TextGroup style={{ paddingTop: "0px" }}>
        <HeaderTwo>Opportunity details</HeaderTwo>
        <Paragraph>{description}</Paragraph>
      </TextGroup>

      <TextGroup style={{ paddingTop: "0px" }}>
        <HeaderTwo>Role</HeaderTwo>
        <Paragraph>{role}</Paragraph>
      </TextGroup>

      {shift.map((s: any, i: number) => (
        <TextGroup key={`dashboard-shift-${i}`} style={{ paddingTop: "0px" }}>
          <HeaderTwo>Shift {i + 1}</HeaderTwo>
          <Paragraph>Start: {formatDateTime(new Date(s.start))}</Paragraph>
          <Paragraph>End: {formatDateTime(new Date(s.end))}</Paragraph>
          <Paragraph>Number of Participants: {s.limit}</Paragraph>
          {/*s.repeating ? (
            <Paragraph>Repeats</Paragraph>
          ) : (
            <Paragraph>Does Not Repeat</Paragraph>
          )*/}
        </TextGroup>
      ))}

      <HeaderTwo>Location</HeaderTwo>
      <SubHeader>{address}</SubHeader>
      {center ? <Map center={center}></Map> : <></>}

      <TextGroup style={{ paddingTop: "0px" }}>
        <HeaderTwo>Additional notes</HeaderTwo>
        <Paragraph>{notes}</Paragraph>
      </TextGroup>

      <HeaderThree>Applicants</HeaderThree>

      <Paragraph>There are no applicants</Paragraph>
      <br />
      <br />
    </SelectedOpportunity>
  );

  return (
    <OrganizationDashboardPage>
      {header}
      <DashboardContainer>
        <Grid container style={gridStyle}>
          <Grid item xs={5} style={gridStyle}>
            <EventsListContainer>
              {getFilteredOpportunities(opportunitiesFilter).reverse()}
            </EventsListContainer>
          </Grid>

          <Grid item xs={7} style={gridStyle}>
            {hideOpDetails ? "" : selectedOpportunityView}
          </Grid>
        </Grid>
      </DashboardContainer>
    </OrganizationDashboardPage>
  );
};

const gridStyle = {
  height: "100%",
};

const HeaderContainer = styled.div`
  font-family: Source Sans Pro;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 2px solid silver;
  margin-top: -1%;
  padding-bottom: 5px;
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
  text-align: left;
  margin-top: 15px;
  margin-bottom: 0px;
`;

const HeaderFour = styled.h3`
  font-family: Source Sans Pro;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 10px;
`;

const SelectedOpportunity = styled.div`
  padding: 0px 14px;
  height: 100%;
  background-color: white;
  scroll-behaviour: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const DashboardContainer = styled.div`
  font-family: Source Sans Pro;
  width: 100%;
  height: calc(100% - 108px);
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
  display: block;
  margin: auto;
  margin-top: 12px;
  height: 300px;
  border-radius: 8px 8px 0px 0px;
`;

const EventsListContainer = styled.div`
  height: 100%;
  font-family: Source Sans Pro;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behaviour: smooth;
`;

const BlueHeaderThree = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  color: #2836d1;
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
