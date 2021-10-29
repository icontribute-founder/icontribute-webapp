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
  let sourceUserName = "Sarah";
  let sourceEMail = "sarahjdavis@hotmail.ca";
  let sourceProfilePicture = "https://i.postimg.cc/Zn3DvjXF/Untitled.png";
  let eventName = "Glebe Annex community clean up";

  return (
    //<NotificationContainer selected={selected} onClick={onClick}>
    <NotificationContainer>
      <IconContainer>
        <Pfp></Pfp>
      </IconContainer>

      <HeaderThree>
        Congratulations! {sourceUserName} has applied for the {eventName} event.
      </HeaderThree>

      <BsThreeDotsVertical style={{ width: "35px" }}></BsThreeDotsVertical>
    </NotificationContainer>
  );
};

const NotificationContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #edecff;
  cursor: pointer;
  margin-left: 5%;
  margin-right: 5%;
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
