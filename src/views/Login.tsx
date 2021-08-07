import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import InputField from "../components/common/InputField";
import { StyledButton } from "../components/OpportunityCard/style";
import { Link, useHistory } from "react-router-dom";
import Carousel from "../assets/images/carousel";

const Login = () => {
  const history = useHistory();
  const handleSignUpClick = () => {
      history.push("/SignUp");
  };
  const handleDashboardClick = () => {
      history.push("/Dashboard");
  };

  return (
    
    <div>
       
        <Paper>
        <Grid container style = {indent}>

            <Grid item xs={6} >
                <Paper style = {darkBlue}>
                
                    
                <h1 style = {h1Style}>&nbsp;</h1>
                <Carousel></Carousel>


                
                <br></br>
                <br></br>
                </Paper>

            </Grid>
            <Grid style = {indent} item xs={5} >
                
                <h1 style = {h1Style}>&nbsp;</h1>
                <h1 style = {h1Style}>Login to iContribute</h1>
                <br></br>
                

                <h4 style = {h4StyleLeft}>Organization E-mail</h4>
                
                <InputField 
                     
                     placeholder = "E-mail"
                />

                <h4 style = {h4StyleLeft}>Password</h4>
                <h4 style = {h4StyleRight}>Forgot Password</h4>
                <InputField 
                   
                    placeholder = "Password"
                />
                
                <StyledButton onClick = {handleDashboardClick} style = {buttonStyle}>Login</StyledButton>

                <br></br>
                <h4 style = {h4Style}>Don't have an account yet? <a style = {blue} onClick={handleSignUpClick}>Sign up here!</a></h4>


                <h4 style = {h4Style}>Or</h4>

                <StyledButton style = {buttonStyle2}>Continue with Google</StyledButton>
                <StyledButton style = {buttonStyle2}>Continue with LinkedIn</StyledButton>
                <StyledButton style = {buttonStyle2}>Continue with Facebook</StyledButton>
               
                </Grid> 
              

        </Grid>
        <br></br>

        </Paper>

        <br></br>
        <br></br>
        
    </div>
  );
};

const h4StyleLeft: React.CSSProperties = {
    fontWeight: 400,
    fontFamily: 'Source Sans Pro',
    fontSize: '14px',
    lineHeight: '0.1',
    float: 'left',
}
const h4StyleRight: React.CSSProperties = {
    fontWeight: 400,
    fontFamily: 'Source Sans Pro',
    fontSize: '14px',
    lineHeight: '0.1',
    float: 'right',
}
const h4Style: React.CSSProperties = {
  fontWeight: 400,
  fontFamily: 'Source Sans Pro',
  fontSize: '14px',
  textAlign: 'center',
}
const h1Style: React.CSSProperties = {
    fontWeight: 600,
    fontFamily: 'Source Sans Pro',
    fontSize: '36px',
    lineHeight: '0.5',
    textAlign: 'center',
}
const indent: React.CSSProperties = {
    marginLeft: '30px',
    marginRight: '30px',
}
const blue: React.CSSProperties = {
    color: '#0000EE',
    cursor: 'pointer',
}
const buttonStyle: React.CSSProperties = {
    display: 'block',
    margin: '0 auto',
    width: '50%',
    textAlign: 'center',

}
const buttonStyle2: React.CSSProperties = {
    display: 'block',
    margin: '0 auto',
    width: '70%',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '10px',
}
const darkBlue: React.CSSProperties = {
    backgroundColor: '#2836D1',
}
const center: React.CSSProperties = {
    alignItems: "center",
}



export default Login;

