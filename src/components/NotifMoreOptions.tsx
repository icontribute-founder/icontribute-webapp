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
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { user } from "../configure";
import { markNotificationRead } from "../features/user";

const NotifMoreOptions = (props: any) => {
  const { userProfile } = useSelector((state: RootState) => state.user);
  let notificationCollection: any[] = [];
  notificationCollection = userProfile.notifications;

  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const notificationProps = props.notificationProps;
  const notification = {
    sourceEmail: notificationProps.sourceEmail,
    eventID: notificationProps.eventID,
    eventName: notificationProps.eventName,
    sourceUserName: notificationProps.sourceUserName,
    read: notificationProps.read,
    type: notificationProps.type,
    date: notificationProps.date,
    sourceProfilePicture: notificationProps.sourceProfilePicture,
  };

  const handleMarkAsRead = async () => {
    try{
      await user.markNotificationRead(userProfile.email, {
        ...notification,
        date: notification.date.toDate(),
      });

      dispatch(markNotificationRead(notification.eventID));
    }
    catch(error){
      console.log(error);
    }
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

  const handleMarkAsReadMsg:string = notification.read=== false ? "Mark as read" : "Mark as unread";

  const options = [
    { name: handleMarkAsReadMsg, handler: handleMarkAsRead },
    //{ name: "View Applicant's Profile", handler: handleAppProf },
    { name: "Remove this notification", handler: handleRemove },
    //{ name: "Report issue", handler: handleReport },
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
