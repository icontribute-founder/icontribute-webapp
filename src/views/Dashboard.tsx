import { useHistory } from "react-router";
import Button from "../components/common/Button";

import styled from "styled-components";

import DemoImage from "../assets/images/Demo_Photo.png";
import TempMap from "../assets/images/temp_map.png";
import MoreDetails from "../assets/images/more-details.svg";
import Calendar from "../components/Svgs/CalendarIcon";
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';





import {
    Grid,
} from "@material-ui/core";


const Dashboard = () => {
    const history = useHistory();
    

    const handleOnClick = () => {
        history.push("/new-opportunity");
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!
    })

    const containerStyle = {
        width: '600px',
        height: '400px'
      };
      
    const center = {
    lat: -3.745,
    lng: -38.523
    };

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    

    interface EventCardProps {
        eventImage: string;
        eventName: string;
        date: Date;
        description: string;
      
        eventID: string;
        onClick: any;
      
        selected: boolean;
      }



    const SmallEventCard = ({
        eventImage,
        eventName,
        date,
        description,
        eventID,
        onClick,
        selected,
      }: EventCardProps) => { 
          return isLoaded ? (
        <div>
            <Button onClick={handleOnClick}>Create a new opportunity</Button>

            <SignupContainer>
                <Grid container>
                    <Grid item xs={6}>
                        <HeaderOne>Let's create your profile</HeaderOne>
                        
                        <HeaderTwo>Login details</HeaderTwo>
                        <HeaderTwo>Organization details</HeaderTwo>
                        <Paragraph>
                            Are you registered as a charity or non-profit
                            organization on the Canada Revenue Agency's website?
                        </Paragraph>

                        <HeaderThree>
                            Upload an account photo or logo
                        </HeaderThree>
                    </Grid>

                    <Grid item xs={6} >
            
                       <Scolling> 

                        <ImageContainer>
                            <img src={DemoImage} alt="DemoImage" width="175%" />
                        </ImageContainer>

                        <TextGroup>
                            <Grid container>

                                <Grid item xs={6}>
                                    <HeaderThree> Variable for Name </HeaderThree>
                                    <HeaderTwo>Name of variable</HeaderTwo>
                                        <Location>
                                            Charity
                                        </Location>
                                        <Location>
                                            Healthcare
                                        </Location>
                                        
                                </Grid>

                                <Grid item xs={6} style={{textAlign: 'right', paddingRight: '50px'}}>  
                                    <img src={MoreDetails} alt="MoreDetails" width="1.5%" />
                                        
                                        <SubHeader>
                                            <Calendar></Calendar>
                                            Date Variable
                                        </SubHeader>
                                        <SubHeader>
                                            Application Deadline: 
                                        </SubHeader>
                                </Grid>

                            </Grid>
                        </TextGroup>

                        <TextGroup style={{paddingTop: '0px'}}>
                            <HeaderTwo>Organization details</HeaderTwo>
                            <Paragraph>
                            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
                            </Paragraph>
                        </TextGroup>

                        <HeaderTwo>Location</HeaderTwo>
                        <SubHeader>123 Princess Drive</SubHeader>
                        <ImageContainer>


                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                            >

                            </GoogleMap>


                        </ImageContainer>
                    
                        <TextGroup>
                            <HeaderTwo>Shift 1</HeaderTwo>

                            <Paragraph >
                                Start: 
                            </Paragraph>
                            <Paragraph>
                                End:
                            </Paragraph>
                            <Paragraph>
                                Does Not Repeat
                            </Paragraph>
                        </TextGroup>

                        <HeaderThree>Applicants</HeaderThree>
                        <Paragraph>
                            There are no applicants
                        </Paragraph>

                        </Scolling>
                    </Grid>


                    
                </Grid>
            </SignupContainer>




        </div>

        
    ): <></>
    };
};




export default Dashboard;




const Scolling = styled.div`
    height: 70vh;
    scroll-behaviour: smooth;
    overflow-y: scroll;
    overflow-x: hidden
`;

const SignupContainer = styled.div`
    font-family: Source Sans Pro;
    width:fit-content;
    margin: auto;
    padding: 100px;

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


const HeaderOne = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin: 0;
`;


const ImageContainer = styled.div`
    width: 55%;

`;

export const SubHeader = styled.h4`
    font-size: 14px;
    font-weight: 400;
    color: #736b6b;
    margin: 0px 0 0 0;
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
