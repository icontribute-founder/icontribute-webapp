import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { LightBlueButton } from "../components/styles";
import Slides from "../components/Slides";

const InputField = styled.div`
    font-family: Source Sans Pro;
    display: flex;
    flex-direction: column;
    width: 70%;
`;

const TextField = styled.input`
    background: #ffffff;
    border: 2px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 8px;
    height: 48px;
    width: 100%;
    margin-top: 8px;
    padding: 10px;
`;

const Left = styled.div`
    background-color: #2836d1;
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const LoginButton = styled(LightBlueButton)`
    background: #ffbc3b;
    width: 197px;
    height: 40px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    font-size: 16px;
    line-height: 24px;
    color: #fefeff;
`;

const Login = () => {
    const history = useHistory();
    const handleSignUpClick = () => {
        history.push("/SignUp");
    };
    const handleDashboardClick = () => {
        history.push("/Dashboard");
    };

    return (
        <Container>
            <Left>
                <Slides />
            </Left>
            <Right>
                <h1>Login to iContribute</h1>
                <InputField>
                    <label htmlFor="loginEmail">Email</label>
                    <TextField
                        type="text"
                        id="loginEmail"
                        placeholder="Please enter your email address"
                    />
                </InputField>
                <InputField>
                    <label htmlFor="loginPassword">Password</label>
                    <TextField
                        type="password"
                        id="loginPassword"
                        placeholder="Password"
                    />
                    <a href="#">Forget password?</a>
                </InputField>
                <LoginButton>Login</LoginButton>
                <p>
                    Dont’t have an account yet? <a href="/signup" onClick={handleSignUpClick}>Sign up here!</a>
                </p>
            </Right>
        </Container>
    );
};

export default Login;
