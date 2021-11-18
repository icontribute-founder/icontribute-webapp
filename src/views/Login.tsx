import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { LightBlueButton } from "../components/styles";
import Slides from "../components/Slides";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user";
import { RootState } from "../store";

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

const ErrorMessage = styled.span`
  display: block;
  float: right;
  color: red;
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
  font-family: "Source Sans Pro";
  display: flex;
  height: 100%;
  width: 100%;
  marign: 0px;
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

interface AuthUser {
  email: string;
  password: string;
}

const Login = ({ setShowSignup }: any) => {
  const dispatch = useDispatch();
  const { error, loggedIn } = useSelector((state: RootState) => state.user);
  const [credential, setCredential] = useState<AuthUser>({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleSignup = () => {
    setShowSignup(true);
  };

  const handleAccountSettingsClick = () => {
    history.push("/account-settings");
  };

  const handleLogin = () => {
    console.log("login");
    const { email, password } = credential;
    dispatch(login({ email, password }));
  };

  const handleInputOnChange = (event: any) => {
    setCredential({
      ...credential,
      [event.target.name]: event.target.value,
    });
  };

  if (loggedIn) {
    return <></>;
  }

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
            name="email"
            onChange={handleInputOnChange}
            value={credential.email}
          />
          <div style={{ marginBottom: "10px" }}>
            <ErrorMessage>{error}</ErrorMessage>
          </div>
        </InputField>
        <InputField>
          <label htmlFor="loginPassword">Password</label>
          <TextField
            type="password"
            id="loginPassword"
            placeholder="Password"
            name="password"
            onChange={handleInputOnChange}
            value={credential.password}
          />
          <div style={{ marginBottom: "20px" }}>
            <a href="#">Forget password?</a>
            <ErrorMessage>{error}</ErrorMessage>
          </div>
        </InputField>
        <LoginButton onClick={handleLogin}>Login</LoginButton>
        <p>
          Dont’t have an account yet?{" "}
          <a href="javascript:void(0);" onClick={handleSignup}>
            Sign up here!
          </a>
        </p>
      </Right>
    </Container>
  );
};

export default Login;
