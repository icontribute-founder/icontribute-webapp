import styled from "styled-components";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import OpportunityCreatedSvg from "../assets/images/opportunityCreated.svg";
import { BlueButton, LightBlueButton } from "../components/styles";
import { useState } from "react";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

import {
  getOpportunitiesByIds,
} from "../features/opportunities";

import { user } from "../configure";

const OpportunityConfirmPage = () => {
  let opportunityDetails = useSelector((state: RootState) => state.opportunity);
  const [opportunityTitle, setOpportunityTitle] = useState(
    opportunityDetails.opportunity.eventName
  );
  const [companyName, setCompanyName] = useState(
    opportunityDetails.opportunity.companyName
  );

 
  const { userProfile } = useSelector((state: RootState) => state.user);
  const userId = userProfile.email;
  const dispatch = useDispatch();

  const history = useHistory();


  const handleDashboardClick = async(e:any) => {
    updateDash();
    history.push("/");
  };
  const handleShareClick = async(e:any)=> {
    updateDash();
    history.push("/");
  };

  const updateDash = async()=> {
    const new_arr = await user.getCompany(userProfile.email);
    if (new_arr != null){
      dispatch(getOpportunitiesByIds({ eventIds: new_arr.event }));
    } 
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <H1>Your opportunity has been created! </H1>

      <img src={OpportunityCreatedSvg} alt="OpportunityCreatedSvg" />

      <H1>{opportunityTitle}</H1>
      <H2>{companyName}</H2>
      <H2>The details can be found on your opportunities page.</H2>

      <ButtonGroup>
        <DashboardButton onClick={handleDashboardClick}>
          Go to Dashboard
        </DashboardButton>

        <ShareButton onClick={handleShareClick}>Share</ShareButton>
      </ButtonGroup>
    </Box>
  );
};

const H1 = styled.h1`
  font-family: Source Sans Pro;
  font-weight: bold;
  font-size: 36px;
`;

const H2 = styled.h2`
  font-family: Source Sans Pro;
  font-weight: bold;
  font-size: 26px;
`;

const DashboardButton = styled(BlueButton)`
  width: 247px;
  font-weight: bold;
  font-size: 16px;
  margin-right: 14px;
`;

const ShareButton = styled(LightBlueButton)`
  width: 247px;
  font-weight: bold;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  margin-top: 58px;
  display: flex;
  flex-direction: row;
`;

export default OpportunityConfirmPage;
