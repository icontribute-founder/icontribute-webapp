import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import NotificationCard from "../components/NotificationCard";
import { Paper } from "@material-ui/core";
import Pfp from "../assets/images/notifPfp";

const Notifications = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderTwo> Notifications</HeaderTwo>
        <BsThreeDotsVertical style={icon2}></BsThreeDotsVertical>
      </HeaderContainer>

      <HeaderTwo>New Notifications</HeaderTwo>

      <NotificationCard
        date={new Date()}
        eventID={"RAocCV3iEIN1TtqjLajd"}
        eventName={"Test2"}
        read={true}
        sourceEmail={"james.ying@carleton.ca"}
        sourceProfilePicture={""}
        sourceUserName={""}
        type={"userApplied"}
      ></NotificationCard>

      <HeaderTwo>Old Notifications</HeaderTwo>

      <NotificationCard
        date={new Date()}
        eventID={"RAocCV3iEIN1TtqjLajd"}
        eventName={"Test2"}
        read={true}
        sourceEmail={"james.ying@carleton.ca"}
        sourceProfilePicture={""}
        sourceUserName={""}
        type={"userApplied"}
      ></NotificationCard>

      {/*      
      <Paper style={boxBlue}>
        <div>
          <Pfp></Pfp>
        </div>

        <h3 style={h3}>
          <b>Congratulations!</b> Jordan has applied for Relay for Life
          Volunteer position. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h3>

        <BsThreeDotsVertical style={icon}></BsThreeDotsVertical>
      </Paper>

      <br></br>

      <Paper style={boxBlue}>
        <div>
          <Pfp></Pfp>
        </div>

        <h3 style={h3}>
          <b>Congratulations!</b> Jordan has applied for Relay for Life
          Volunteer position. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h3>

        <BsThreeDotsVertical style={icon}></BsThreeDotsVertical>
      </Paper>

      <h2 style={h2}>Old Notifications</h2>

      <Paper style={box}>
        <div>
          <Pfp></Pfp>
        </div>
        <h3 style={h3}>
          <b>Congratulations!</b> Jordan has applied for Relay for Life
          Volunteer position. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h3>
        <BsThreeDotsVertical style={icon}></BsThreeDotsVertical>
      </Paper>
*/}
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
