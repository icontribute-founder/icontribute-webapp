
import styled from "styled-components";
import ContactUs from "../components/HelpCentre/ContactUs";
import FAQBlock from "../components/HelpCentre/FAQBlock";

const HelpCentre = () => {

  
  return (
    <div>
      <HeaderContainer>
        <HeaderOne>Help Centre</HeaderOne>
      </HeaderContainer>
    

      <MiddleContainer>
        <div style={{marginBottom: "60px"}}></div>
      <HeaderOne>Frequently Asked Questions</HeaderOne>
      <FAQBlock/>
      </MiddleContainer>
      <BottomContainer>
      <HeaderOne>Contact Us</HeaderOne>
      <HeaderThree>Do you have any questions or concerns? Please send us a message and we will get back to you as soon as possible!</HeaderThree>      
      </BottomContainer>
      <ContactUs/>

    </div>
  );
};



const HeaderContainer = styled.div`
  font-family: Source Sans Pro;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid silver;
  padding-left: 30px;
`;

const MiddleContainer = styled.div`
  font-family: Source Sans Pro;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 98px;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 30px;
  width: 40%;
  font-family: Source Sans Pro;
  margin-bottom: 6px;
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
  margin-top: 20px;
  margin-bottom: 20px;
`;

const HeaderThree = styled.h3`
  font-family: Source Sans Pro;
  margin-top: 0;
  margin-bottom: 10px;
`;






export default HelpCentre;