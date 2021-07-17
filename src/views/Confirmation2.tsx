import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import LoginDetail from "../components/Profile/LoginDetail";
import ProfileSide from "../components/Profile/ProfileSide";
import OrganizationDetail from "../components/Profile/OrganizationDetail";
import { StyledButton } from "../components/OpportunityCard/style";
import { Link, useHistory } from "react-router-dom";
import img from "../assets/images/defaultAvatar.png";

const Confirmation2 = () => {

    const history = useHistory();
    const handleReturnClick = () => {
        history.push("/");
    };
    
  return (
    <div>
        <h1 style = {h1Style}> Thanks for confirming your email!</h1>
        <h2 style = {h2Style}> Now that you're verified, you can create and post volunteer opportunities. Let's tour the dashboard to get you started!</h2>
        <h2></h2>
        <StyledButton onClick={handleReturnClick}
            style = {buttonStyle}
        >
            Tour the Dashboard
            
        </StyledButton>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h3 style = {h3StyleLeft}>iContribute</h3>
        <h3 style = {h3StyleRight}>Terms 	&#38; Privacy &nbsp;&nbsp;&nbsp; Contact Us &nbsp;&nbsp;&nbsp; <img src={img} alt="" style  = {avatarStyle}></img></h3> 
    </div>
  );
};

const h1Style: React.CSSProperties = {
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro',
    fontSize: '22px',
    marginLeft: '22px',
  }
  const h2Style: React.CSSProperties = {
    fontWeight: 'normal',
    fontFamily: 'Source Sans Pro',
    fontSize: '20px',
    marginLeft: '22px',
  }
  const buttonStyle: React.CSSProperties = {
    marginLeft: '22px',
  }
  const h3StyleLeft: React.CSSProperties = {
    fontWeight: 'normal',
    fontFamily: 'Source Sans Pro',
    fontSize: '15px',
    marginLeft: '22px',
    textAlign: 'left',
    float: 'left',
  }
  const h3StyleRight: React.CSSProperties = {
    fontWeight: 'normal',
    fontFamily: 'Source Sans Pro',
    fontSize: '15px',
    marginLeft: '22px',
    textAlign: 'right',
    float: 'right',
  
  }
  const avatarStyle: React.CSSProperties = {
    float: 'right',
    display: 'block',
    
    
  }
  

export default Confirmation2;
