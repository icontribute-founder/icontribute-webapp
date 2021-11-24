import styled from "styled-components";
import Pfp from "../assets/images/notifPfp";
import NotifMoreOptions from "../components/NotifMoreOptions";

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
      <TextContainer>
        <ImageContainer>
          <Pfp></Pfp>
          {/* sourceProfilePicture.length > 0 ? 
            <StyledImage src={sourceProfilePicture} alt="ProfilePicture" />
          : <Pfp></Pfp> */}
        </ImageContainer>

        <HeaderThree>
          Congratulations! <b>{sourceUserName}</b> has applied for the{" "}
          <b>{eventName}</b> event.
        </HeaderThree>
      </TextContainer>

      <NotifMoreOptions  ></NotifMoreOptions>
    </NotificationContainer>
  );
};

const NotificationContainer = styled.div`
  padding: 15px;
  background: #edecff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 4%;
  margin-right: 5%;
  margin-top: 0.5%;
  box-shadow: 0 2px 2px 0px rgba(28, 28, 27, 0.3);
  color: black;
  padding: 3px;
`;

const TextContainer = styled.div`
  flex-direction: row;
  align-items: center;
  background: #edecff;
  display: flex;
  margin-left: 5%;
  width: 1300px;
`;

const ImageContainer = styled.div`
  flex-direction: row;
  align-items: center;
  background: #edecff;
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

export default NotificationCard;
