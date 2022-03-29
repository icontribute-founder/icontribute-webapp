import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import DeletePopUp from "./DeletePopUp";
import { setAction } from "../features/opportunity";
import { logout } from "../features/user";
import { ExitToApp, Help, Info } from "@material-ui/icons";
import { Divider } from "@material-ui/core";
import smallLogo from "../assets/images/icontribute_logo_only.svg";
import ProfileButton from "../assets/images/profile_button.svg";

const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const ProfileOptions = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleSeeProfile = () => {
    history.push("/account-settings");
    handleClose();
  };

  const handleHelpCentre = () => {
    history.push("/help-centre");
    handleClose();
  };

  const handleAbout = () => {
    window.location.href = 'https://icontribute.community/#/'
    handleClose();
  };

  const handleLogOut = () => {
    //here you would update the dispatch
    dispatch(logout());
    //handleClose();
  };

  const options = [
    { name: "See Your Profile", handler: handleSeeProfile },
    { name: "Help Centre", handler: handleHelpCentre },
    { name: "About iContribute", handler: handleAbout },
    { name: "Log Out", handler: handleLogOut },
  ];

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <ToolButton
        onClick={
          //handleOnClick("/account-settings");
          handleClick
        }
      >
      <img src={ProfileButton} alt="profileButton" />
      </ToolButton>

      <Menu anchorEl={anchorEl} keepMounted onClose={handleClose} open={open}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <MenuItem onClick={handleSeeProfile}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                alt="logo"
                style={{ height: "68px", width: "68px" }}
                src={smallLogo}
              />
              <div style={{ display: "flex", flexDirection: "column", marginLeft: '8px' }}>
                iContribute
                <label>
                  See your profile
                </label>
              </div>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleHelpCentre}>
            <Help style={{ marginRight: "8px" }} />
            Help Centre
          </MenuItem>
          <MenuItem onClick={handleAbout}>
            <Info style={{ marginRight: "8px" }} />
            About iContribute
          </MenuItem>
          <MenuItem onClick={handleLogOut}>
            <ExitToApp style={{ marginRight: "8px" }} />
            Log Out
          </MenuItem>
        </div>
      </Menu>
    </StyledHeader>
  );
};

const StyledMoreOptions = styled.div`
  padding: 0%;
`;

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

export const HeaderOnePopUp = styled.h1`
  font-family: Source Sans Pro;
  font-weight: bold;
  text-align: left;
  color: #2836d1;
  text-align: center;
`;

export const HeaderThree = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  color: #192226;
`;

const ToolButton = styled.button`
  margin-right: 12px;
  margin-left: 12px;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export default ProfileOptions;
