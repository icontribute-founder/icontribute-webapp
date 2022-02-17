import styled from "styled-components";
import { H3, H4, H5 } from "./styles";
import ShowMoreText from "react-show-more-text";
import { Grid } from "@material-ui/core";
import calendarIcon from "../assets/images/calendarIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import EditableCard from "./EditableCard";
import Map from "../components/Map";
import { useEffect } from "react";
import axios from "axios";
import { updateCoordinates } from "../features/opportunity";
import LocationIcon from "./Svgs/LocationIcon";

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

const Categories = styled.div`
  margin-top: 10px;
  > * {
    margin-right: 10px;
  }
`;

const CategoryTag = styled.span`
  background: #edecff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  color: #2836d1;
  width: fit-content;
  padding: 6px;
  font-size: 14px;
`;

const SubHeader = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #736b6b;
  margin: 0px 0px 10px 0px;
`;

const ContentContainer = styled.div`
  margin-top: 10px;
`;

const ExternalLink = styled.a`
  color: #192226;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 20px;
  text-decoration: none;
`

const monthToString = (month: number) => {
  switch (month) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      return "";
  }
};

const dateFormator = (n: number) => {
  const date = new Date(n);
  const day = date.getDate();
  const month = monthToString(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

const ShiftCard = ({ start, end, limit, i }: any) => {
  return (
    <EditableCard>
      <H4>Shift{i + 1}</H4>
      <p>Start: {new Date(start).toDateString()}</p>
      <p>End: {new Date(end).toDateString()}</p>
      <p>Number of Participants: {(limit)}</p>
    </EditableCard>
  );
};

const Summary = () => {
  const dispatch = useDispatch();

  const {
    opportunity: {
      eventName,
      description,
      shift,
      eventImage,
      coordinates,
      address,
      date,
      deadline,
      categories,
      role,
      requirements,
      notes,
    },
  } = useSelector((state: RootState) => state.opportunity);

  useEffect(() => {
    const getCoords = async (address: string) => {
      const app_id = "AfFrODN6FHZJMhB0Xk2n";
      const app_code = "nBx_mqNULkfLWAY5W2AjOA";
      try {
        const { data } = await axios.get(
          "https://geocoder.api.here.com/6.2/geocode.json",
          {
            params: {
              app_id,
              app_code,
              searchtext: address,
              // "6700 Century Ave, Suite 100 Mississauga, Ontario, CANADA",
            },
          }
        );
        const { Response } = data;
        if (Response && Response.View && Response.View.length > 0) {
          const result = Response.View[0].Result;
          if (result && result.length > 0) {
            if (result[0].Location) {
              const { Latitude, Longitude } =
                result[0].Location.DisplayPosition;
              console.log({ Latitude, Longitude });
              dispatch(
                updateCoordinates({
                  latitude: Latitude,
                  longitude: Longitude,
                })
              );
            }
          }
        }
      } catch (error) {
        console.log(error);
        dispatch(
          updateCoordinates({
            latitude: 0,
            longitude: 0,
          })
        );
      }
    };
    getCoords(address);
  }, []);

  let image = "https://i.postimg.cc/m2gmWsvX/default-Opportunity.png";
  if (eventImage && typeof eventImage !== "string") {
    image = URL.createObjectURL(eventImage);
  }

  const { opportunity } = useSelector((state: RootState) => state.opportunity);
  console.log("Opportunity Details: ", opportunity);

  const center = {
    lat: coordinates.latitude,
    lng: coordinates.longitude,
  };

  return (
    <EditableCard>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <img
            width="211px"
            height="118px"
            alt="complex"
            src={image}
            style={{ borderRadius: "8px" }}
          />
        </Grid>
        <Grid item md={9}>
          <BasicDetails>
            <H3>{eventName}</H3>
            <Grid container spacing={3} style={{ marginTop: "48px" }}>
              <Grid item md={6}>
                <TimeText>
                  <img
                    src={calendarIcon}
                    alt="calendarIcon"
                    style={{ marginRight: "6px" }}
                  />
                  {dateFormator(date)}
                </TimeText>
                <DeadlineLabel>Application Deadline:</DeadlineLabel>
                <DeadlineValue>{dateFormator(deadline)}</DeadlineValue>
              </Grid>
              <Grid item md={6}>
                <H5>Categories</H5>
                <Categories>
                  {categories.map((category) => (
                    <CategoryTag>{category}</CategoryTag>
                  ))}
                </Categories>
              </Grid>
            </Grid>
          </BasicDetails>
        </Grid>
        <Grid item xs={12}>
          <H4>Opportunity Details</H4>
          <ContentContainer>
            <ShowMoreText lines={3} more="Show more" less="Show less">
              {description}
            </ShowMoreText>
          </ContentContainer>
        </Grid>
        <Grid item xs={12}>
          <H4>Requirements</H4>
          <ContentContainer>
            <ShowMoreText lines={3} more="Show more" less="Show less">
              {requirements}
            </ShowMoreText>
          </ContentContainer>
        </Grid>
        <Grid item xs={12}>
          <H4>Role</H4>
          <ContentContainer>
            <ShowMoreText lines={3} more="Show more" less="Show less">
              {role}
            </ShowMoreText>
          </ContentContainer>
        </Grid>
        {notes === "" ? <></> : <Grid item xs={12}>
          <H4>Notes</H4>
          <ContentContainer>
            <ShowMoreText lines={3} more="Show more" less="Show less">
              {notes}
            </ShowMoreText>
          </ContentContainer>
        </Grid>}
        <Grid item xs={12}>
          <H4>Location</H4>
          <ContentContainer>
            <SubHeader>
              <LocationIcon /> {address}
            </SubHeader>
            <Map center={center}></Map>
          </ContentContainer>
        </Grid>
        {shift.map(({ start, end, limit }: any, i) => (
          <Grid item xs={6} key={`shift-card-${i}`}>
            <ShiftCard start={start} end={end} limit={limit} i={i} />
          </Grid>
        ))}
      </Grid>
    </EditableCard>
  );
};

const OpportunityReview = () => {
  const {
    opportunity: { type, url },
  } = useSelector((state: RootState) => state.opportunity);

  const typeContent =
    type === "redirect" ? (
      <>
        <Subtitle>External Website</Subtitle>
        <ExternalLink href={url}>{url}</ExternalLink>
        <Content>
          Provide a link to you website. We’ll redirect applicants to your
          organization's website to apply for an opportunity.
        </Content>
      </>
    ) : (
      <>
        <Subtitle>iContribute</Subtitle>
        <Content>
          Choose to receive applications through iContribute, and we’ll store
          all the opportunity details and provide applicants you email address.
        </Content>
      </>
    );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <EditableCard>
          <Title>Application Details</Title>
          {typeContent}
        </EditableCard>
      </Grid>
      <Grid item xs={12}>
        <Summary />
      </Grid>
    </Grid>
  );
};

export default OpportunityReview;
