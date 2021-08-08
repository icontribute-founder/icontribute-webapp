import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
// import InputField from "../components1/common/InputField";
// import { StyledButton } from "../components1/OpportunityCard/style";
import { Link, useHistory } from "react-router-dom";
import Carousel from "../assets/images/carousel";

const Login = () => {
    const history = useHistory();
    const handleLoginClick = () => {
        history.push("/");
    };

    return (
        <div>
            <Paper>
                <Grid container style={indent}>
                    <Grid item xs={6}>
                        <Paper style={darkBlue}>
                            <h1 style={h1Style}>&nbsp;</h1>
                            <Carousel></Carousel>

                            <br></br>
                            <br></br>
                        </Paper>
                    </Grid>

                    <Grid style={indent} item xs={5}>
                        <h1 style={h1Style}>&nbsp;</h1>
                        <h1 style={h1Style}>Sign up to iContribute</h1>
                        <br></br>

                        <h4 style={h4StyleLeft}>Organization E-mail</h4>

                        <TextField placeholder="E-mail" />

                        <h4 style={h4StyleLeft}>Password</h4>

                        <TextField placeholder="Password" />

                        <h4 style={h4StyleLeft}>Re-enter Password</h4>

                        <TextField placeholder="Re-enter Password" />

                        <Button onClick={handleLoginClick} style={buttonStyle}>
                            Sign up
                        </Button>

                        <br></br>
                        <h4 style={h4Style}>
                            Have an account?{" "}
                            <a style={blue} onClick={handleLoginClick}>
                                Login
                            </a>
                        </h4>
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
    fontFamily: "Source Sans Pro",
    fontSize: "14px",
    lineHeight: "0.1",
    float: "left",
};
const h4Style: React.CSSProperties = {
    fontWeight: 400,
    fontFamily: "Source Sans Pro",
    fontSize: "14px",
    textAlign: "center",
};
const h1Style: React.CSSProperties = {
    fontWeight: 600,
    fontFamily: "Source Sans Pro",
    fontSize: "36px",
    textAlign: "center",
    lineHeight: "0.5",
};
const indent: React.CSSProperties = {
    marginLeft: "30px",
};
const blue: React.CSSProperties = {
    color: "#0000EE",
    cursor: "pointer",
};
const buttonStyle: React.CSSProperties = {
    display: "block",
    margin: "0 auto",
    width: "50%",
    textAlign: "center",
};
const darkBlue: React.CSSProperties = {
    backgroundColor: "#2836D1",
};

export default Login;
