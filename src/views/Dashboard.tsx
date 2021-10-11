import { useHistory } from "react-router";
import Button from "../components/common/Button";
import SignUpImage from "../assets/images/signup-image.png";
import styled from "styled-components";

const Dashboard = () => {
    const history = useHistory();

    const handleOnClick = () => {
        history.push("/new-opportunity");
    };

    return (
        <div>
            <HeaderContainer>
                <HeaderOne>Your organization dashboard</HeaderOne>
                <HeaderTwo>Here you can view the volunteer opportunities you've posted, edit them, or create a new one.</HeaderTwo>
            </HeaderContainer>

            <BottomContainer>
                <LeftBox>
                    <HeaderThree>You have not created any opportunities. When you do, they will show up on this page.</HeaderThree>
                    <br/>
                    <Button onClick={handleOnClick}>Create my first opportunity</Button>
                </LeftBox>
                <RightBox>
                    <img src={SignUpImage} alt="SignUpImage" />
                </RightBox>
            </BottomContainer>
        </div>
    );
};

export default Dashboard;

const HeaderContainer = styled.div`
    font-family: Source Sans Pro;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 2px solid silver;
    padding-left: 2%;
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
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 0.5;
`;

const HeaderOne = styled.h1`
    font-family: Source Sans Pro;
    font-weight: bold;
    text-align: left";
`;

const HeaderTwo = styled.h2`
    font-family: Source Sans Pro;
    text-align: left";
    margin-bottom: -1%;
    margin-bottom: 1%;
`;

const HeaderThree = styled.h3`
    font-family: Source Sans Pro;
    text-align: left";
    margin-bottom: 2%;
`;