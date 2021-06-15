import { Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

const SidebarMenu = styled.div`
  position: fixed;
  margin-left: 25px;
`;

const StyledHeader3 = styled.h3`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 120%;
  margin: 0px 0px 27px 0px;
  color: #133a4b;
`;

const SideMenuButton = styled.button<{ active: boolean }>`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: left;
  line-height: 25px;
  width: 279px;
  height: 48px;
  border: none;
  border-radius: 12px;
  vertical-align: middle;
  padding-left: 16px;
  background: ${(props) => (props.active ? "#026896" : "transparent")};
  color: ${(props) => (props.active ? "#ffffff" : null)};
  p {
    margin: 0;
    line-height: 48px;
  }
`;

function ProfileSide() {
  const [active, setActive] = useState(false);
  return (
    <SidebarMenu>
      <StyledHeader3>Profile</StyledHeader3>
      <Grid>
        <Grid item xs={12}>
          <SideMenuButton active={true}>
            <p>Login Details</p>
          </SideMenuButton>
        </Grid>
        <Grid item xs={12}>
          <SideMenuButton active={false}>
            <p>Organization Details</p>
          </SideMenuButton>
        </Grid>
      </Grid>
    </SidebarMenu>
  );
}

export default ProfileSide;
