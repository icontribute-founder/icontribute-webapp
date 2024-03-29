import styled from "styled-components";
import { useHistory } from "react-router-dom";
import SignupImage from "../assets/images/signup-confirm-image.svg";
import { LightBlueButton } from "../components/styles";
import Button from "../components/common/Button";

const SignUpConfirm = ({ setShowSignupConfirm }: any) => {

    const handleDashboardClick = () => {
        setShowSignupConfirm(false);
    };

    return (
        <div>
            <SignupContainer>
                <FirstDiv>

                    <HeaderOne>Thanks for signing up!</HeaderOne>

                    <HeaderTwo>
                        We will review your organization and notify you when your account is approved.
                    </HeaderTwo>

                    <ParaContainer>

                        <ParaStyleOne>
                            For the safety of our student volunteers, we ensure that all organization accounts are registered under the Government of Canada before allowing you to post opportunities.
                        </ParaStyleOne>

                        <ParaStyleOne>
                            For now, please help us speed up the verification process by checking your inbox to confirm your email.
                        </ParaStyleOne>

                        <ParaStyleOne>
                            If you don’t see the email within 72 hours, please contact our support team at icontribute.founder@gmail.com for assistance.
                        </ParaStyleOne>

                    </ParaContainer>

                    <LoginButton onClick={handleDashboardClick}>Return to home</LoginButton>

                </FirstDiv>

                <ImageContainer>
                    <img src={SignupImage} alt="SignupImage" width="100%" />
                </ImageContainer>


            </SignupContainer>

        </div>
    );
};

export default SignUpConfirm;

const FirstDiv = styled.div`
    display: inline-block;
    width: 550px;
`;

const SignupContainer = styled.div`
    font-family: Source Sans Pro;
    width:fit-content;
    margin: auto;
    padding-top: 50px;
`;

const ParaContainer = styled.div`
    font-size: 0.9em;
    width: 440px;
`;

const HeaderTwo = styled.p`
    margin-bottom: 40px;
`;

const ParaStyleOne = styled.p`
    color: rgba(115, 107, 107, 1);
`;

const HeaderOne = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin: 0;
`;

const SubHeader = styled.h4`
    font-size: 14px;
    font-weight: 400;
    color: #736b6b;
    margin: 9px 0 0 0;
`;

const ImageContainer = styled.div`
    width: 400px;
    display: inline-block;
`;

const LoginButton = styled(LightBlueButton)`
  background: #2836D1;
  width: 197px;
  height: 40px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  font-size: 16px;
  line-height: 24px;
  color: #fefeff;
`;