import { useHistory } from "react-router";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../components/common/Button";

const Dashboard = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleOnClick = () => {
        history.push("/new-opportunity");
    };

    return (
        <div>
            <HeaderContainer>
                <LeftBox>
                    <HeaderOne>Your organization dashboard</HeaderOne>
                    <HeaderThree>
                        Here you can view the volunteer opportunities you've
                        posted, edit them, or create a new one.
                    </HeaderThree>
                </LeftBox>
                <RightBox>
                    <Button onClick={handleOnClick}>
                        Create a new opportunity
                    </Button>
                </RightBox>
            </HeaderContainer>
        </div>
    );
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
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 2px solid silver;
    margin-top: -1%;
    flex-direction: row;
    width: 1;
`;

const LeftBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 0.5;
    padding-left: 2%;
`;

const RightBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 0.5;
    padding-top: 2%;
    padding-right: 3%;
`;

const HeaderOne = styled.h1`
    font-family: Source Sans Pro;
    font-weight: bold;
    text-align: left";
`;

const HeaderThree = styled.h3`
    font-family: Source Sans Pro;
    text-align: left";
    margin-bottom: -2%;
    margin-bottom: 1%;
`;
