import { TextField } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import { LightBlueButton } from "../components/styles";
import Lock from "../components/Svgs/Lock";
import { auth } from "../configure";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
`;

const Title = styled.h1`
  color: #192226;
  font-family: "Source Sans Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
`;

const Field = styled(TextField)`
  color: black;
  border: 1px solid #babcbd;
  box-sizing: border-box;
  border-radius: 8px;
  width: 30%;
`;

const Button = styled(LightBlueButton)`
  background: #2836d1;
  width: 197px;
  height: 40px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  font-size: 16px;
  line-height: 24px;
  color: #fefeff;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h6`
  color: #757a7c;
  font-family: "Source Sans Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  width: 50%;
`;

const Link = styled.a`
  color: #757a7c;
  font-family: "Source Sans Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;

function validateEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const ForgotPassword = ({ setShowForgotPassword }: any) => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleReset = async () => {
    if (!validateEmail(email)) {
      setError("Email is invalid");
      return;
    }
    setError("");
    try {
      await auth.resetPassword(email);
      setSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    setShowForgotPassword(false);
  };

  const handleFieldOnChange = (e: any) => {
    setEmail(e.target.value);
  };

  const content = !sent ? (
    <>
      <Subtitle>
        Enter your email address below and we’ll send you a link to reset your
        password
      </Subtitle>
      <Field
        id="outlined-full-width"
        label="Email"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        error={error !== ""}
        onChange={handleFieldOnChange}
        variant="outlined"
        helperText={error}
      />
      <Button onClick={handleReset}>Request password reset</Button>
      <Subtitle>
        Already have an account?{" "}
        <Link href="javascript:void(0);" onClick={handleLogin}>
          Log In
        </Link>
      </Subtitle>
    </>
  ) : (
    <>
      <Subtitle>
        We have sent the reset password link to the registered email. Please
        check your email inbox and follow the instructions to reset your
        password.
      </Subtitle>
      <Button onClick={handleLogin}>Back to login</Button>
    </>
  );

  return (
    <Container>
      <Lock />
      <Title>Forgot Password?</Title>
      {content}
    </Container>
  );
};

export default ForgotPassword;
