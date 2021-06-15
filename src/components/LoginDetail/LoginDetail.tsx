import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import WidgetPaper from "../../components/WidgetPaper";
import InputField from "../../components/common/InputField";

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

function LoginDetail() {
  return (
    <div>
      <WidgetPaper>
        <StyledHeader3 style={{ marginBottom: "28px" }}>
          Login Details
        </StyledHeader3>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={7}>
            <InputField
              label="Organization Email"
              name="organization-email"
              id="organization-email"
              placeholder="Organization Email"
            />
          </Grid>
          <Grid item xs={2}>
            <ChangeButton>Change</ChangeButton>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={7}>
            <InputField
              label="Password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </Grid>
          <Grid item xs={2}>
            <ChangeButton>Change</ChangeButton>
          </Grid>
        </Grid>
      </WidgetPaper>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SaveButton>Save</SaveButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginDetail;
