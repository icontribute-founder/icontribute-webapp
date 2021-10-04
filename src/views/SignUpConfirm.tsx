
import styled from "styled-components";
import {
    Grid,
    Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SignupGraphic from "../components/Svgs/SignupGraphic";
import { BlueButton} from "../components/styles";

const SignUpConfirm = () => {

    const history = useHistory();

    const handleDashboardClick = () => {
        history.push("/");
    };

    return (
        <div>
            <SignupContainer>
                <Grid container>
                    
                    <Grid item xs={6}>

                        <HeaderOne>Thanks for signing up!</HeaderOne>
                    
                        <HeaderThree>
                        We will review your organization and notify you when your account is approved.
                        </HeaderThree>

                        <Paragraph>
                        For the safety of our student volunteers, wee ensure that all organization accounts are registered under the Government of Canada before allowing you to post opportunities.
                        </Paragraph>

                        <Paragraph>
                        For now, please help us speed up the verification process by checking your inbox to confirm your email. 
                        </Paragraph>

                        <Paragraph>
                        If you don’t see the email within 72 hours, please contact our support team for assistance.
                        </Paragraph>

                    </Grid>

                    <Grid item xs={5}>
                        <ImageContainer>
                            <SignupGraphic />
                        </ImageContainer>
                    </Grid>

                </Grid>

                <DashboardButton onClick={handleDashboardClick}>
                    Return to home
                </DashboardButton>

            </SignupContainer>
           
        </div>
    );
};

export default SignUpConfirm;

const SignupContainer = styled(Container)`
    font-family: Source Sans Pro;
    height: 100%;
    padding-bottom: 150px;
`;

export const HeaderOne = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin: 75px 0 0 0;
`;

export const HeaderTwo = styled.h2`
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    color: #192226;
    margin: 75px 0 0 0;
`;

export const HeaderThree = styled.h3`
    font-size: 20px;
    font-weight: bold;
    line-height: 32px;
    color: #192226;
    margin: 50px 0 24px 0;
`;

export const SubHeader = styled.h4`
    font-size: 14px;
    font-weight: 400;
    color: #736b6b;
    margin: 9px 0 0 0;
`;

export const Paragraph = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #192226;
    margin-bottom: 24px;
    margin-top: 20px;
`;

const ImageContainer = styled.div`
    text-align: right;
`;

const DashboardButton = styled(BlueButton)`
    width: 247px;
    font-weight: bold;
    font-size: 16px;
    margin-right: 14px;
`;