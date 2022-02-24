import { useHistory } from "react-router";
import { useState } from "react";
import Button from "../components/common/Button";
import styled from "styled-components";
import DashboardGraphic from "../components/Svgs/DashboardGraphic";
import { reset } from "../features/opportunity";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

const EmptyDashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state: RootState) => state.user);
  const [showAlert, setShowAlert] = useState(false);

  const handleOnClick = () => {

    if (userProfile.verified) {
      history.push("/opportunity/create");
      dispatch(reset());
      } else {
      console.log("Organization is not verified");
      setShowAlert(true);
    }
  };

  return (
    <>
      <HeaderContainer>
        <HeaderOne>Your organization dashboard</HeaderOne>
      </HeaderContainer>

      <BottomContainer>
        <LeftBox>
          {showAlert ? 
          <div style={{justifyContent: "flex-start"}}>
            <HeaderThree>Because we are working with students, the iContribute team would like to verify your organization. As an additional security measure, we would like to schedule a brief chat with you.</HeaderThree>
            <HeaderThree>Please contact us at icontribute.founder@gmail.com</HeaderThree>
          </div>
          :
          <div style={{justifyContent: "flex-start"}}>
            <HeaderThree>You have not created any opportunities. When you do, they will show up on this page.</HeaderThree>
            <br />
            <Button onClick={handleOnClick}>Create my first opportunity</Button>
          </div>
          }          
        </LeftBox>
        <RightBox>
          <DashboardGraphic />
        </RightBox>
      </BottomContainer>
    </>
  );
};

export default EmptyDashboard;

const HeaderContainer = styled.div`
  font-family: Source Sans Pro;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid silver;
  padding-left: 3%;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 5%;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 0.5;
  padding-top: 7%;
`;

const RightBox = styled.div`
  padding: 5%;
`;

const HeaderOne = styled.h1`
    font-family: Source Sans Pro;
    text-align: left";
    margin-top: 0%;
    margin-bottom: 2%;
    margin-left: 5%;
    margin-right: 5%;
`;

const HeaderThree = styled.h3`
  font-family: Source Sans Pro;
  margin-top: 5%;
  margin-bottom: 5%;
`;
