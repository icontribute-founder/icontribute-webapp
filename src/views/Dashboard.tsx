import { useHistory } from "react-router";
import Button from "../components/common/Button";

import styled from "styled-components";
import { useState, useEffect } from "react";
import DemoImage from "../assets/images/Demo_Photo.png";
import MoreDetails from "../assets/images/more-details.svg";

import {
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Container,
} from "@material-ui/core";
import InputField from "../components/FormElements/InputField";
import ImageDropzone from "../components/FormElements/ImageDropzone";
import SignupGraphic from "../components/Svgs/SignupGraphic";


const Dashboard = () => {
    const history = useHistory();
    
    const [orgImage, setOrgImage] = useState<any>();
    const handleOnClick = () => {
        history.push("/new-opportunity");
    };
    return (
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
                        <div>
                            
                        </div>


                        <HeaderThree>
                            Upload an account photo or logo
                        </HeaderThree>
                    </Grid>

                    <Grid item xs={6}>
            
           

                        <ImageContainer>
                            <img src={DemoImage} alt="DemoImage" width="175%" />
                        </ImageContainer>

                        <ImageSubheading>
                            <Grid container>
                                <Grid item xs={6}>
                                    <HeaderThree> Variable for Name </HeaderThree>
                                    <HeaderTwo>Name of variable</HeaderTwo>
                                    <span>
                                        <Location>
                                            Charity
                                        </Location>
                                        <Location>
                                            Healthcare
                                        </Location>
                                    </span>
                                </Grid>

                                <Grid item xs={6}>  
                                    <img src={MoreDetails} alt="MoreDetails" width="1.5%" />
                                    <SubHeader>
                                    Date Variable
                                    </SubHeader>
                                    <SubHeader>
                                    Application Deadline: 
                                    </SubHeader>
                                </Grid>
                            </Grid>
                        </ImageSubheading>

                        

                        <ImageSubheading>
                        <HeaderTwo>Organization details</HeaderTwo>
                        <Paragraph>
                            Are you registered as a charity or non-profit
                            organization on the Canada Revenue Agency's website?
                        </Paragraph>
                        </ImageSubheading>
                        <div>
                            
                        </div>


                        <HeaderTwo>Location</HeaderTwo>

                        <HeaderThree>Applicants</HeaderThree>
                    </Grid>


                    
                </Grid>
            </SignupContainer>




        </div>

        
    );
};

export default Dashboard;


const FirstDiv = styled.div`
    display: inline-block;
    width: 550px;
`;

const SignupContainer = styled.div`
    font-family: Source Sans Pro;
    width:fit-content;
    margin: auto;
    padding-top: 50px;
`;

const ImageSubheading = styled.div`
    font-size: 0.9em;
    margin: auto;
    padding-bottom: 20px;
    padding-top: 20px;
`;

const ParaContainer = styled.div`
    font-size: 0.9em;
    
`;

const HeaderTwo = styled.p`
    font-weight: bold;
    margin: 0px; 
`;

const ParaStyleOne = styled.p`
    color: rgba(115, 107, 107, 1);
`;

const HeaderOne = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin: 0;
`;


const ImageContainer = styled.div`
    width: 300px;

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
