import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import Notification from "../models/Notification";
import NotifcationCard from "../components/NotificationCard"
import UnreadNotificationCard from "../components/UnreadNotificationCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Notifications = () => {
  const { userProfile } = useSelector((state: RootState) => state.user);

  let notificationCollection = [];
  notificationCollection = userProfile.notifications;

  let readNotifications: any = [];
  let unreadNotifications: any = [];

  notificationCollection.map((element: any) => {
    element.read
      ? readNotifications.push(element)
      : unreadNotifications.push(element);
  });

  return (
    <div>
      <HeaderContainer>
        <HeaderOne> Notifications</HeaderOne>
        <BsThreeDotsVertical style={icon2}></BsThreeDotsVertical>
      </HeaderContainer>

      <HeaderTwo>New Notifications</HeaderTwo>

      {unreadNotifications.map((element: Notification) => {
        return (
          <UnreadNotificationCard
            key={element.eventID}
            date={element.date}
            eventID={element.eventID}
            eventName={element.eventName}
            read={element.read}
            sourceEmail={element.sourceEmail}
            sourceProfilePicture={element.sourceProfilePicture}
            sourceUserName={element.sourceUserName}
            type={element.type}
          ></UnreadNotificationCard>
        );
      })}

      <HeaderTwo>Old Notifications</HeaderTwo>

      {readNotifications.map((element: Notification) => {
        return (
          <NotifcationCard
            key={element.eventID}
            date={element.date}
            eventID={element.eventID}
            eventName={element.eventName}
            read={element.read}
            sourceEmail={element.sourceEmail}
            sourceProfilePicture={element.sourceProfilePicture}
            sourceUserName={element.sourceUserName}
            type={element.type}
          ></NotifcationCard>
        );
      })}

      <br></br>
    </div>
  );
};

const HeaderContainer = styled.div`
  font-family: Source Sans Pro;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid silver;
  margin-top: -1%;
  flex-direction: row;
  width: 1;
  height: 0.3;
`;

const HeaderOne = styled.h2`
  font-family: Source Sans Pro;
  margin-top: 2%;
  margin-left: 4%;
  margith-right: 2%;
  font-size: 30px;
  font-weight: bold;
`;

const HeaderTwo = styled.h2`
  font-family: Source Sans Pro;
  margin-left: 4%;
  margith-right: 2%;
  font-size: 24px;
  font-weight: normal;
`;

const icon2: React.CSSProperties = {
  cursor: "pointer",
  width: "35px",
  marginRight: "5%",
};

export default Notifications;
