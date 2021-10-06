import React, { useState } from "react";
import styled from "styled-components";
import {
    Grid,
    Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SignupImage from "../assets/images/signup-confirm-image.png";
import { BlueButton } from "../components/styles";

const SignUpConfirm = () => {

    const history = useHistory();

    const handleDashboardClick = () => {
        history.push("/");
    };

    return (
        <div>
            <SignupContainer style={SignupContainerStyle}>
                <Grid container>

                    <Grid item xs={7}>

                        <HeaderOne>Thanks for signing up!</HeaderOne>
                            <p style={HeaderTwo}>
                                We will review your organization and notify you when your account is approved.
                            </p>

                        <div style={ParaContainer}>
                            <p style={ParaStyleOne}>
                                For the safety of our student volunteers, wee ensure that all organization accounts are registered under the Government of Canada before allowing you to post opportunities.
                            </p>

                            <p style={ParaStyleOne}>
                                For now, please help us speed up the verification process by checking your inbox to confirm your email.
                            </p>

                            <p style={ParaStyleOne}>
                                If you don’t see the email within 72 hours, please contact our support team for assistance.
                            </p>
                        </div>

                        <DashboardButton onClick={handleDashboardClick}>
                            Return to home
                        </DashboardButton>
                    </Grid>

                    <Grid item xs={5}>
                        <ImageContainer>
                            <img src={SignupImage} alt="SignupImage" style={SignupImageStyle} />
                        </ImageContainer>
                    </Grid>

                </Grid>


            </SignupContainer>

        </div>
    );
};

export default SignUpConfirm;

const SignupContainer = styled(Container)`
    font-family: Source Sans Pro;
    height: 100%;
    padding-top: 50px;
`;

const ParaContainer: React.CSSProperties = {
    fontSize: "0.9em",
    width: "80%",
    paddingLeft: "max-content"
};

const HeaderTwo: React.CSSProperties = {
    marginBottom: "40px",
};

const ParaStyleOne: React.CSSProperties = {
    color: "rgba(115, 107, 107, 1)"
};

export const HeaderOne = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin: 0;
`;

export const SubHeader = styled.h4`
    font-size: 14px;
    font-weight: 400;
    color: #736b6b;
    margin: 9px 0 0 0;
`;

const ImageContainer = styled.div`
    margin-top: 20px;
    text-align: right;
`;

const DashboardButton = styled(BlueButton)`
    width: 247px;
    font-weight: bold;
    font-size: 16px;
    margin-right: 14px;
    margin-top: 30px
`;

const SignupImageStyle: React.CSSProperties = {
    width: "100%"
};

const SignupContainerStyle: React.CSSProperties = {
    paddingLeft: "160px",
    paddingRight: "160px"
};