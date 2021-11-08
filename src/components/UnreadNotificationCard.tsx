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

const UnreadNotificationCard = (props: NotificationCardProps) => {
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
      <TextContainer>
        <ImageContainer>
          <Pfp></Pfp>
          {/* sourceProfilePicture.length > 0 ? 
            <StyledImage src={sourceProfilePicture} alt="ProfilePicture" />
          : <Pfp></Pfp> */}
        </ImageContainer>

        <HeaderThree>
          Congratulations! <b>{sourceUserName}</b> has applied for the <b>{eventName}</b> event.
        </HeaderThree>
      </TextContainer>

      <BsThreeDotsVertical style={{ width: "35px" }}></BsThreeDotsVertical>
    </NotificationContainer>
  );
};

const NotificationContainer = styled.div`
  padding: 15px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2.5%;
  margin-right: 5%;
  margin-top: 0.5%;
  box-shadow: 1px 2px 3px 1px rgba(28, 28, 27, .3);
  color: black;
  padding: 3px;
`;

const TextContainer = styled.div`
  flex-direction: row;
  align-items: center;
  background: white;
  display: flex;
  margin-left: 3%;
  width: 1300px;
`;

const ImageContainer = styled.div`
  flex-direction: row;
  align-items: center;
  background: white;
  display: flex;
  margin-right: 10%;
`;

const StyledImage = styled.img`
    width: 50;
    height: 50;
    border-radius: 90;
    border-color: Colors.black;
`;

const HeaderThree = styled.h3`
  font-family: Source Sans Pro;
  align-items: flex-start;
  margin-left: 0px;
  margin-right: 50px;
  font-size: 24px;
  font-weight: normal;
`;

export default UnreadNotificationCard;