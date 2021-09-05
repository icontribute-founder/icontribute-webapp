import React, { useState } from "react";
// import InputField from "../components1/common/InputField";
// import { StyledButton } from "../components1/OpportunityCard/style";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { LightBlueButton } from "../components/styles";
import Slides from "../components/Slides";
import Profile from "../assets/images/profile";
import { ButtonBase } from "@material-ui/core";

const InputField = styled.div`
    font-family: Source Sans Pro;
    display: flex;
    flex-direction: column;
    width: 100%;
   
`;
const TextField = styled.input`
    background: #ffffff;
    border: 2px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 8px;
    height: 48px;
    width: 100%;
    margin-top: 8px;
    padding: 10px;
`;
const TextFieldBig = styled.input`
    background: #ffffff;
    border: 2px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 8px;
    height: 96px;
    width: 100%;
    margin-top: 8px;
    padding: 10px;
`;
const Left = styled.div`
    
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;  
    flex-direction: column;
    
    
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    width: 100%;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    height: 100%;
    width: auto;
    margin-left: 10%;
    margin-right: 10%;
 
`;

const Button = styled(LightBlueButton)`
    background: #2836D1;
    width: 197px;
    height: 40px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    font-size: 16px;
    line-height: 24px;
    color: #fefeff;
    
    float: right;
    

`;

const AccountSettings = () => {


    return (
        <Container>
            <Left>

                <h1 style = {h1}>iContribute</h1>

                <h2 style = {h2}>Email address</h2>

                <InputField>
                    <label htmlFor="loginEmail">Email</label>
                    <TextField
                        type="text"
                        id="loginEmail"
                        
                    />
                </InputField>
                <br></br>


                <h2 style = {h2}>Change password</h2>

                <InputField>
                    <label htmlFor="loginEmail">Password</label>
                    <TextField
                        type="text"
                        id="loginEmail"
                        placeholder = "Enter your current password"
                        
                    />
                </InputField>
                <InputField>
                    <label htmlFor="loginEmail">New password</label>
                    <TextField
                        type="text"
                        id="loginEmail"
                        placeholder = "Enter a new password"
                        
                    />
                </InputField>
                <InputField>
                    <label htmlFor="loginEmail">Confirm new password</label>
                    <TextField
                        type="text"
                        id="loginEmail"
                        placeholder = "Re-enter the new password"
                        
                    />
                </InputField>
                <br></br>
                <div><Button>Save new password</Button></div>
                
                <h2 style = {h2}>Organization details</h2>


                <InputField>
                    <label htmlFor="loginEmail">Website</label>
                    <TextField
                        type="text"
                        id="loginEmail"
                 
                        
                    />
                </InputField>
                <InputField>
                    <label htmlFor="loginEmail">Postal Code</label>
                    <TextField
                        type="text"
                        id="loginEmail"
                     
                        
                    />
                </InputField>
                <InputField>
                    <label htmlFor="loginEmail">Description</label>
                    <TextFieldBig
                        type="text"
                        id="loginEmail"
                     
                        
                    />
                </InputField>
                <br></br>
                <div><Button>Save details</Button></div>
                <br></br>
                <br></br>

            </Left>

            <Right>
                <ButtonBase style = { btnbase}><Profile></Profile></ButtonBase>

            </Right>
        </Container>
    );
};
const h1: React.CSSProperties = {
    fontFamily : "Source Sans Pro",
 
};
const h2: React.CSSProperties = {
    fontFamily : "Source Sans Pro",
    
    
};
const btnbase: React.CSSProperties = {
    width: "200px",
    height: "200px",
}

export default AccountSettings;
