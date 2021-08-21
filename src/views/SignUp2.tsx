import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Container } from '@material-ui/core';

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
            <SignupContainer>
                <HeaderOne>Let's create your profile</HeaderOne>
                <SubHeader>Tell us a little about your organization</SubHeader>
            </SignupContainer>
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
`

const HeaderOne = styled.p`
    font-size: 40px;
    font-weight: bold;
    margin: 0;  
`

const SubHeader = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #736B6B;
    margin: 9px 0 0 0;
`