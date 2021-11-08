import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import Notification from "../models/Notification"
import NotificationCard from "../components/NotificationCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Notifications = () => {

  const currUser = useSelector(
    (state: RootState) => state.newOrganization
  );

  let notificationCollection = [];
  notificationCollection = currUser.notifications;
  console.log("Current User Notification: ", notificationCollection);

  let readNotifications:any = [];
  let unreadNotifications:any = [];

  notificationCollection.map((element: any) => {
    element.read ? 
    readNotifications.push(element)
    : unreadNotifications.push(element)
  })
  console.log("Read Notification: ", readNotifications);
  console.log("Unread Notification: ", unreadNotifications);

  return (
    <div>
      <HeaderContainer>
        <HeaderOne> Notifications</HeaderOne>
        <BsThreeDotsVertical style={icon2}></BsThreeDotsVertical>
      </HeaderContainer>

      <HeaderTwo>New Notifications</HeaderTwo>

        {unreadNotifications.map((element: Notification) => {
          return (
            <NotificationCardContainer>
              <NotificationCard
                key={element.eventID}
                date={new Date()}
                eventID={element.eventID}
                eventName={element.eventName}
                read={true}
                sourceEmail={element.sourceEmail}
                sourceProfilePicture={element.sourceProfilePicture}
                sourceUserName={element.sourceUserName}
                type={element.type}
              ></NotificationCard>
            </NotificationCardContainer>
          )
        })}

      <HeaderTwo>Old Notifications</HeaderTwo>

        {readNotifications.map((element: Notification) => {
          return (
            <NotificationCardContainer>
              <NotificationCard
                key={element.eventID}
                date={new Date()}
                eventID={element.eventID}
                eventName={element.eventName}
                read={true}
                sourceEmail={element.sourceEmail}
                sourceProfilePicture={element.sourceProfilePicture}
                sourceUserName={element.sourceUserName}
                type={element.type}
              ></NotificationCard>
            </NotificationCardContainer>
          )
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

const NotificationCardContainer = styled.div`
  font-family: Source Sans Pro;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1%;
  flex-direction: row;
  width: 1;
  height: 0.3;
`;

const HeaderOne = styled.h2`
  font-family: Source Sans Pro;
  margin-left: 2%;
  margith-right: 2%;
  font-size: 30px;
  font-weight: bold;
`;

const HeaderTwo = styled.h2`
  font-family: Source Sans Pro;
  margin-left: 2%;
  margith-right: 2%;
  font-size: 30px;
  font-weight: normal;
`;

const box: React.CSSProperties = {
  padding: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "5%",
  marginRight: "5%",
};
const boxGray: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "2px solid silver",
};
const boxBlue: React.CSSProperties = {
  padding: "15px",
  backgroundColor: "#EDECFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "5%",
  marginRight: "5%",
};
const h1: React.CSSProperties = {
  fontFamily: "Source Sans Pro",
  textAlign: "left",
  marginLeft: "5%",
  marginRight: "5%",
};

const h3: React.CSSProperties = {
  fontFamily: "Source Sans Pro",
  marginLeft: "15px",
  marginRight: "30px",
  fontSize: "15px",
  fontWeight: "normal",
};
const icon: React.CSSProperties = {
  cursor: "pointer",
  width: "35px",
};
const icon2: React.CSSProperties = {
  cursor: "pointer",
  width: "35px",
  marginRight: "5%",
};

export default Notifications;