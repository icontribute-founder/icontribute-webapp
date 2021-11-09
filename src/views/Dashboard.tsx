import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import SmallEventCard from "../components/SmallEventCard";
import Button from "../components/common/Button";
import Calendar from "../components/Svgs/CalendarIcon";
import MoreOptions from "../components/MoreOptions";
import Map from "../components/Map";
import { opportunityCollection } from "../configure";
import EmptyDashboard from "./EmptyDashboard";

//import PopUp from "../components/PopUp";

import { confirmAlert } from "react-confirm-alert"; // Import
import "../assets/css/react-confirm-alert.css";

const Dashboard = () => {
  const history = useHistory();

  const deleteButton = useRef<any>(null);

  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [opportunities, setOpportunity] = useState([]);
  const [opportunitiesLoaded, setOpportunitiesLoaded] = useState(false);
  
  const [disable, setDisable] = useState({}); // disables opportunities screen when pop up is open
  const [value, setValue] = useState(""); // checks if user typed "DELETE"

  const [deleteOnClick, setDeleteOnClick] = useState(false); // checks if the delete on click was clicked
  const [deleteOpportunityId, setDeleteOpportunityId] = useState(''); //holds id of opportunity to be deleted
  
  const [popUpOpen, setPopUpOpen] = useState(false);


  const [center, setCenter] = useState({
    lat: 45.42,
    lng: -75.69,
  });

  const handleOnClick = () => {
    history.push("/new-opportunity");
  };

  const deletePopUP = (id: any) => {

    setDisable({ opacity: 0.5, pointerEvents: "none" });
    confirmAlert({
      closeOnClickOutside: false,
      customUI: ({ onClose }) => {
        return (
          <div>
            <HeaderOnePopUp style={{color: "#2836D1",fontFamily: "Source Sans Pro",textAlign: "center"}}>
              Are you sure?
            </HeaderOnePopUp>
            <HeaderTwo style={{ fontFamily: "Source Sans Pro", textAlign: "center" }}>
              If you’d like to delete this opportunity, type ‘DELETE’ in the
              text box below to confirm.
            </HeaderTwo>
            <form
              style={{height: 30,padding: "30px"}}
            >
              <label style={{ height: 30, width: "100%" }}>
                <input
                  placeholder="type 'DELETE'"
                  style={{ height: 30, width: "100%" }}
                  onChange={(e) => {
                    setValue(e.currentTarget.value);
                  }}
                />
              </label>
            </form>

            <HeaderThree style={{fontFamily: "Source Sans Pro",textAlign: "center",fontSize: "10px"}}>
              WARNING: if you delete this opportunity, you will lose its details
              and automatically decline all the active applicants. This cannot
              be undone.
            </HeaderThree>

            <Grid
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              <Grid item xs={6}>
                <button
                  onClick={() => {
                    setDisable({});
                    onClose();

                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#2836D1",
                    padding: "25px 40% 20px 40%",
                    borderRight: "1px #D1D2D3 solid",
                    borderBottom: "0px",
                    borderLeft: "0px",
                    borderTop: "1px #D1D2D3 solid",
                  }}
                >
                  Cancel
                </button>
              </Grid>

              <Grid item xs={6}>
                <button
                  ref={deleteButton}
                  id="delete-button"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#D1D2D3",
                    maxWidth: "100%",
                    whiteSpace: "nowrap",
                    padding: "25px 55% 25px 30%",
                    borderRight: "0px",
                    borderBottom: "0px",
                    borderLeft: "0px",
                    borderTop: "1px #D1D2D3 solid",
                    opacity: 0.5,
                    pointerEvents: "none"
                  }}

                  onClick={(e:any) => {
                    setDeleteOnClick(true)
                    setDeleteOpportunityId(id)
                    setDisable({});
                    onClose();
                  }}
                >
                  Delete Opportunity
                </button>
              </Grid>
            </Grid>

            

          </div>
        );
      },
    });
  };

  
  

  const { isLoaded: isMapLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });

  const handleCardOnClick = (e: any, i: number, props: any) => {
    setSelectedOpportunity(props);
    setSelectedIndex(i);
    setCenter({
      lat: props.coordinates._lat,
      lng: props.coordinates._long,
    });
  };

  useEffect(() => {
    if (value === "DELETE") {

      if (deleteButton) {
        deleteButton.current.style.pointerEvents = 'auto';
        deleteButton.current.style.color = '#2836D1';
      }
    }
    else{
      if (deleteButton.current) {
        deleteButton.current.style.pointerEvents = 'none';
        deleteButton.current.style.backgroundColor = 'white';
      }
    }
  }, [value]);

                          
  useEffect(() => {
    const getOpportunity = async () => {
      setOpportunitiesLoaded(false);
      const data: any = await opportunityCollection.getOpportunities();
      
      const result = data.filter((item:any) => item.deleted !== true);
      setOpportunity(result);
            
      if (data[0] != null) {
        handleCardOnClick(0, 0, data[0]);
      }
      console.log(data)
      setOpportunitiesLoaded(true);
    };
    getOpportunity();
  }, []);


  if (opportunitiesLoaded) {
    const getOpportunity = async () => {
      if(deleteOnClick === true){
        console.log("I am deleting an opportunity")
        //console.log(deleteVar === " 3PbEJDsrSWyzhhA6bc56")
        await opportunityCollection.deleteOpportunity(deleteOpportunityId.replace(' ',''))
        setDeleteOnClick(false)
      }  
    }
    getOpportunity();
  }

  if (opportunitiesLoaded && opportunities.length === 0) {
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
        date={date.toDate()}
        description={description}
        eventID={eventID}
        onClick={(e: any) => handleCardOnClick(e, i, props)}
        selected={i === selectedIndex}
      />
    );
  });

  if (!selectedOpportunity) {
    return "";
  }

  const {
    eventID,
    eventName,
    companyName,
    description,
    address,
    eventImage,
    categories,
    shift,
    deadline,
    date,
  } = selectedOpportunity;


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
    <SelectedOpportunity style={disable}>
      {eventImage ? <StyledImage src={eventImage} alt="EventImage" /> : <></>}

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
            <MoreOptions deleteScreen={deletePopUP} eventId={eventID} />
            <SubHeader>
              <Calendar />
              {formatDate(new Date(date.seconds * 1000))}
            </SubHeader>
            <SubHeader>
              Application Deadline:{" "}
              {formatDate(new Date(deadline.seconds * 1000))}
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
        <TextGroup>
          <HeaderTwo>Shift {i + 1}</HeaderTwo>
          <Paragraph>
            Start: {formatDateTime(new Date(s.start.seconds * 1000))}
          </Paragraph>
          <Paragraph>
            End: {formatDateTime(new Date(s.end.seconds * 1000))}
          </Paragraph>
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

      {popUpOpen ? (<HeaderOne>Hi</HeaderOne>) : <></>}
      
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
  padding-right: 12px;
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

export const HeaderOnePopUp = styled.h1`
    font-family: Source Sans Pro;
    font-weight: bold;
    text-align: left";
    color: #2836D1;
    textAlign: 'center';
`;

export default Dashboard;
