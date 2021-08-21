import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import InputField from '../components/InputField';

const SignUp2 = () => {

    const history = useHistory();

    const handleBackClick = () => {
        history.goBack()
    }

    const backArrow = "<"

    return (
        <div>
            <BackButton>
                <a href="/" onClick={handleBackClick}><span>{backArrow}</span> Go back </a>
            </BackButton>
            <Grid container>
                <Grid item lg={6}>
                    <SignupContainer>
                        <HeaderOne>Let's create your profile</HeaderOne>
                        <SubHeader>Tell us a little about your organization</SubHeader>
                        <HeaderTwo>Login details</HeaderTwo>
                        <InputField label="Email" placeholder="Enter your organization email" name="org-email" id="org-email"></InputField>
                        <InputField label="Create a Password" placeholder="Enter a password" name="password" id="password"></InputField>
                        <InputField label="Confirm Password" placeholder="Re-enter the same password" name="confirm-password" id="confirm-password"></InputField>
                        <HeaderTwo>Organization details</HeaderTwo>
                        <InputField label="Organization Name" placeholder="ie. iContribute" name="org-name" id="org-name"></InputField>
                        <InputField label="Website" placeholder="ie. https://icontribute.community" name="website" id="website"></InputField>
                        <InputField label="Postal Code" placeholder="ie. A2H B4P" name="postal-code" id="postal-code"></InputField>
                    </SignupContainer>
                </Grid>
                <Grid item xs={6}>
                    <h2>Image</h2>
                </Grid>
                <Grid item xs={12}>
                    <h2>Image form</h2>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignUp2

const BackButton = styled.div`
    margin-top: 35px;
    margin-left: 29px;
    a {
        font-size: 12px;
        font-family: sans-serif;
        font-weight: bold;
        text-decoration: none;
        color: black;
        span {
            font-size: 12px;
        }
    }
`

const SignupContainer = styled.div`
    font-family: Source Sans Pro;
    letter-spacing: 1px;
    padding: 50px 160px 50px 160px;
    height: 100%;
    padding-bottom: 300px;
`

const HeaderOne = styled.p`
    font-size: 40px;
    font-weight: bold;
    margin: 0;  
`

const HeaderTwo = styled.p`
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    color: #192226;
    margin: 75px 0 0 0;
`

const SubHeader = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #736B6B;
    margin: 9px 0 0 0;
`