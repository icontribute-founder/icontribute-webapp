import React, { useState } from "react";
import { StyledButton } from "../components/OpportunityCard/style";
import { Link, useHistory } from "react-router-dom";
import img from "../assets/images/defaultAvatar.png";

const Confirmation1 = () => {

    const history = useHistory();
    const handleNextClick = () => {
        history.push("/confirmation2");
    };
    
  return (
    <div >
        <h1 style = {h1Style}>Thanks for signing up! We'll be reviewing your organization application soon</h1>

        <h2 style = {h2Style}>Please wait for our team to personally verify your account before you're are able to post any volunteer opportunities. </h2>
        <h2 style = {h2Style}>For now, please check your inbox to verify your email.</h2>
        <h2 style = {h2Style}>If you don't see this email within <strong>72</strong> hours, please contact support team for assistance.</h2>
        <h2></h2>

        <StyledButton 
          onClick={handleNextClick}
          style = {buttonStyle}
        >
            Next
        </StyledButton>

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

export default Confirmation1;
