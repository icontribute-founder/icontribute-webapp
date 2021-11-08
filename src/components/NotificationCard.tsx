import styled from "styled-components";
import Pfp from "../assets/images/notifPfp";
import { BsThreeDotsVertical } from "react-icons/bs";

interface NotificationCardProps {
  date: Date;
  eventID: string;
  eventName: string;
  read: boolean;
  sourceEmail: string;
  sourceProfilePicture: string;
  sourceUserName: string;
  type: string;
}

const NotificationCard = (props: NotificationCardProps) => {
  let eventID = props.eventID;
  let eventName = props.eventName;
  let read = props.read;
  let sourceEmail = props.sourceEmail;
  let sourceProfilePicture = props.sourceProfilePicture;
  let sourceUserName = props.sourceUserName;
  let type = props.type;
  

  return (
    //<NotificationContainer selected={selected} onClick={onClick}>
    <NotificationContainer>
      <IconContainer>
        sourceProfilePicture === "" ? 
          <Pfp></Pfp> 
          : <StyledImage src={sourceProfilePicture} alt="ProfilePicture" />
      </IconContainer>

      <HeaderThree>
        Congratulations! <b>{sourceUserName}</b> has applied for the <b>{eventName}</b> event.
      </HeaderThree>

      <BsThreeDotsVertical style={{ width: "35px" }}></BsThreeDotsVertical>
    </NotificationContainer>
  );
};

const NotificationContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #edecff;
  cursor: pointer;
  margin-top: -0.5%;
  margin-left: 5%;
  margin-right: 5%;
`;

const StyledImage = styled.img`
    width: 50;
    height: 50;
    border-radius: 90;
    border-color: Colors.black;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
`;

const HeaderThree = styled.h3`
  font-family: Source Sans Pro;
  margin-left: 15px;
  margin-right: 30px;
  font-size: 24px;
  font-weight: normal;
`;

const EventImage = styled.div<{ sourceProfilePicture: string }>`
  background-image: url(${(props) => props.sourceProfilePicture});
  background-size: cover;
  background-position: center;
  width: 125px;
  height: 125px;
  border-radius: 8px;
  margin-right: 10px;
  float: left;
`;

export default NotificationCard;