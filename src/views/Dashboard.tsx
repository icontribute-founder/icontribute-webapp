import { useHistory } from "react-router";
import Button from "../components/common/Button";

import { useEffect, useState } from "react";
import styled from "styled-components";

import DemoImage from "../assets/images/Demo_Photo.png";
import TempMap from "../assets/images/temp_map.png";
import MoreDetails from "../assets/images/more-details.svg";
import Calendar from "../components/Svgs/CalendarIcon";
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import config from "../firebaseConfig.json";
import { OpportunityCollection } from "../firebase-access/src/";



import SignUpImage from "../assets/images/signup-image.png";
import DashboardGraphic from "../components/Svgs/DashboardGraphic";


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

    const [indexes, setIndexes] = useState([false, false]);
    const [opportunities, setOpportunity] = useState([]);
    const defaultIndexesBasedOnOpsLength: boolean[] = [];
    
    interface EventInfoProps {
        position: string;
        
    }
      

    useEffect(() => {
        const getOpportunity = async () => {
          const opportunityCollection = OpportunityCollection.create(config);
          const data: any = await opportunityCollection.getOpportunities();
          setOpportunity(data);
          console.log("Data: ", data);
    
          for (let i = 0; i < opportunities.length; i++) {
            defaultIndexesBasedOnOpsLength[i] = false;
          }
          setIndexes(defaultIndexesBasedOnOpsLength);
        };
        getOpportunity();
      }, []);


     

    
    


    return isLoaded ? (


        <div>
                            <HeaderContainer>
                                <HeaderOne>Your organization dashboard</HeaderOne>
                            </HeaderContainer>

                            <BottomContainer>
                                <LeftBox>
                                    <HeaderThree>
                                        You have not created any opportunities. When you do,
                                        they will show up on this page.
                                    </HeaderThree>
                                    <br />
                                    <Button onClick={handleOnClick}>
                                        Create my first opportunity
                                    </Button>
                                </LeftBox>
                                <RightBox>
                                    {/* <img src={SignUpImage} alt="SignUpImage" /> */}
                                    <DashboardGraphic />
                                </RightBox>
                            </BottomContainer>
                        </div>


        
        
        
    ): <></>

    };




export default Dashboard;


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

export const HeaderThreePaulina = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin: 0px; 

    color: #192226;
    `;
const HeaderContainer = styled.div`
    font-family: Source Sans Pro;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid silver;
    padding-left: 3%;
`;

const BottomContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 5%;
`;

const LeftBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 0.5;
    padding-top: 7%;
`;

const RightBox = styled.div`
    padding: 5%;
`;

const HeaderOne = styled.h1`
    font-family: Source Sans Pro;
    text-align: left";
    margin-top: 0%;
    margin-bottom: 2%;
    margin-left: 5%;
    margin-right: 5%;
`;

const HeaderThree = styled.h3`
    font-family: Source Sans Pro;
    margin-top: 5%;
    margin-bottom: 5%;
`;
