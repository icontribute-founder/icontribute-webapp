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

const NotifMoreOptions = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMarkAsRead = () => {
    handleClose();
  };

  const handleAppProf = () => {
    handleClose();
  };

  const handleRemove = () => {
    handleClose();
  };

  const handleReport = () => {
    handleClose();
  };


  const options = [
    { name: "Mark as read",handler: handleMarkAsRead },
    { name: "View Applicant's Profile",handler: handleAppProf },
    { name: "Remove this notification",handler: handleRemove },
    { name: "Report issue", handler: handleReport },
  ];

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledMoreOptions>
      <IconButton
        aria-label="more"
        onClick={handleClick}
        aria-haspopup="true"
        aria-controls="long-menu"
        style={{
          padding: "0%",
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted onClose={handleClose} open={open}>
        {options.map(({ handler, name }) => (
          <MenuItem key={`option-${name}`} onClick={handler}>
            {name}
          </MenuItem>
        ))}
      </Menu>
      
    </StyledMoreOptions>
  );
};

const StyledMoreOptions = styled.div`
  padding: 0%;
`;

export const HeaderOnePopUp = styled.h1`
    font-family: Source Sans Pro;
    font-weight: bold;
    text-align: left";
    color: #2836D1;
    textAlign: 'center';
`;

export const HeaderThree = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  color: #192226;
`;

export default NotifMoreOptions;
