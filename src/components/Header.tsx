import { useHistory } from "react-router";
import styled from "styled-components";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ProfileOptions from "../components/ProfileOptions";

import HomeButton from "../assets/images/home_button.svg";
import NotificationButton from "../assets/images/notification_button.svg";
import LogoButton from "../assets/images/new_logo.svg";

const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  background-color: #2836d1;
  width: 100%;
  height: 65px;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  z-index: 1000;
`;

const HeaderText = styled.button`


  margin-left: 12px;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 24px;
  color: #fefeff;
  display: flex;
  background: none;
  border: none;
  align-items: center;

  
  
`;

const Tools = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToolButton = styled.button`
  margin-right: 12px;
  margin-left: 12px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Header = () => {
  const history = useHistory();

  const handleOnClick = (route: string) => {
    history.push(route);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSettingsClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
    console.log("I am trying to handle close");
  };

  const handleSeeProfile = () => {
    handleOnClick("/account-settings");
    handleClose();
  };

  const handleEditOpportunity = () => {
    handleClose();
  };

  const handleDuplicateOpportunity = () => {
    handleClose();
  };

  const handleDeleteOpportunity = () => {
    handleClose();
  };

  const options = [
    { name: "See Your Profile", handler: handleSeeProfile },
    { name: "Edit Opportunity", handler: handleEditOpportunity },
    { name: "Duplicate Opportunity", handler: handleDuplicateOpportunity },
    { name: "Delete Opportunity", handler: handleDeleteOpportunity },
  ];

  return (
    <StyledHeader>
      <HeaderText
        onClick={() => {
          handleOnClick("/");
        }}
      >
       <img src={LogoButton} alt="logoButton" width = '100%' style={{marginTop: '25%'}}/>
      </HeaderText>
      
      <Tools>
        <ToolButton
          onClick={() => {
            handleOnClick("/");
          }}
        >
          <img src={HomeButton} alt="homeButton" />
        </ToolButton>
        <ToolButton
          onClick={() => {
            handleOnClick("/notifications");
          }}
        >
          <img src={NotificationButton} alt="notificationButton" />
        </ToolButton>
        <ProfileOptions />
      </Tools>
    </StyledHeader>
  );
};

export default Header;
