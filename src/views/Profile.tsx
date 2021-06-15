import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import LoginDetail from "../components/LoginDetail/LoginDetail";

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
`;

const ProfileSide = styled.div`
  position: fixed;
  margin-top: 20px;
  margin-left: 25px;
`;

const ProfileContent = styled.div`
  position: relative;
  width: auto;
  height: 100%;
  margin-top: 20px;
  margin-right: 30px;
`;

const StyledHeader3 = styled.h3`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 120%;
  margin: 0px;
  color: #133a4b;
`;

const ChangeButton = styled.button`
  background-color: #5094b9;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  color: white;
  border: none;
  font-size: 15px;
  line-height: 24px;
  padding: 6px;
  padding-left: 17px;
  padding-right: 17px;
`;

const SaveButton = styled.button`
  background-color: #5094b9;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
  color: white;
  border: none;
  font-size: 16px;
  line-height: 24px;
  padding: 14px;
  padding-left: 143px;
  padding-right: 143px;
  margin-top: 40px;
`;

function Profile() {
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState([
    {
      name: "Login Details",
      component: <LoginDetail />,
    },
    {
      name: "Organization Details",
      //   component: <ApplicationDetails />,
    },
  ]);

  return (
    <div>
      <ProfileContainer>
        <ProfileSide>
          <h1>Profile Side</h1>
        </ProfileSide>
        <ProfileContent>
          <Grid container>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}>
              {page[currentPage].component}
            </Grid>
          </Grid>
        </ProfileContent>
      </ProfileContainer>
    </div>
  );
}

export default Profile;
