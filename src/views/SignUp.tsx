import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Container,
} from "@material-ui/core";
import InputField from "../components/FormElements/InputField";
import TextareaField from "../components/FormElements/TextareaField";
import ImageDropzone from "../components/FormElements/ImageDropzone";
import InteractiveButton from "../components/Buttons/InteractiveButton";
import axios from "axios";
import FormData from "form-data";
import SignupGraphic from "../components/Svgs/SignupGraphic";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../features/user";
import {
  defaultEvent,
  Company,
  UserType,
  defaultCompany,
} from "@icontribute-founder/firebase-access";
import default_photo from "../assets/images/default_photo.png";

import { LightBlueButton } from "../components/styles";
import Slides from "../components/Slides";

import { login } from "../features/user";
import { RootState } from "../store";

import { uploadImage } from "@icontribute-founder/firebase-access";
import { storage } from "../configure";

/*
interface SignupDetails {
  email: string;
  password: string;
  isRegisteredCRA: string;
  organizationName: string;
  website: string;
  postalCode: string;
  description: string;
  orgImageUrl: string;
}
*/

const SignUp = ({ setShowSignup, setShowSignupConfirm }: any) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleBackClick = () => {
    setShowSignup(false);
    // history.goBack();
  };

  const [orgImage, setOrgImage] = useState<File>();
  const [passwordCheckMark, setPasswordCheckMark] = useState("none");
  const [passwordConfirmCheckMark, setPasswordConfirmCheckMark] =
    useState("none");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState("none");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [signupDetails, setSignupDetails] = useState<Company>(defaultCompany);
  // const [signupDetails, setSignupDetails] = useState<Company>({
  //   email: "",
  //   isRegisteredCRA: "",
  //   companyName: "",
  //   url: "",
  //   postalCode: "",
  //   description: "",
  //   //orgImageUrl: "",
  //   event: [],
  //   rating: 0,
  //   reviews: [],
  //   categories: [],
  //   notifications: [],
  //   verified: false,
  //   profilePicture: "",
  //   backgroundPicture: "",
  //   type: UserType.COMPANY,
  // });

  useEffect(() => {
    if (
      signupDetails.description === "" ||
      password === "" ||
      signupDetails.email === "" ||
      signupDetails.postalCode === "" ||
      errorVisible === "block" ||
      signupDetails.isRegisteredCRA === "" ||
      signupDetails.companyName === "" ||
      signupDetails.url === "" ||
      orgImage === null
    ) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
    return () => {};
  }, [signupDetails, orgImage]);

  const backArrow: string = "<";
  const saveButtonText: string = "Save & Submit";

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
    setPasswordCheckMark(e.target.value.length !== 0 ? "block" : "none");
    setPasswordConfirmCheckMark(
      confirmPassword === ""
        ? "none"
        : e.target.value === confirmPassword
        ? "block"
        : "none"
    );
    setErrorVisible(
      confirmPassword === ""
        ? "none"
        : e.target.value === ""
        ? "none"
        : e.target.value === confirmPassword
        ? "none"
        : "block"
    );
  };

  const onConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
    setPasswordConfirmCheckMark(
      e.target.value === ""
        ? "none"
        : e.target.value === password
        ? "block"
        : "none"
    );
    setErrorVisible(
      e.target.value === ""
        ? "none"
        : password === ""
        ? "none"
        : e.target.value === password
        ? "none"
        : "block"
    );
  };

  const handleFormChange = (e: any) => {
    setSignupDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const passwordChange = (e: any) => {
    handleFormChange(e);
    onPasswordChange(e);
  };

  const submitSignupDetails = async (e: any) => {
    e.preventDefault();

    // Old code to save image
    // let formData = new FormData();
    //const url = "https://icontribute-api-dev-server.herokuapp.com/images/";
    // if (orgImage) {
    //   formData.append("photo", orgImage[0], "image.jpg");
    // } else {
    //   //needs to be of type blob
    //   const parts = [
    //     new Blob([], {
    //       type: "text/plain",
    //     }),
    //     " Same way as you do with blob",
    //     new Uint16Array([33]),
    //   ];

    //   const file = new File(parts, "sample.txt");
    //   const test_object = {
    //     path: "figure out the path",
    //     name: "a name",
    //     lastModified: 1638485464958,
    //     lastModifiedDate:
    //       "Thu Dec 02 2021 17:51:04 GMT-0500 (Eastern Standard Time)",
    //     webkitRelativePath: "",
    //   };
    //   var f = new File([], "filename");
    //   //{path: '16464545-test-written-in-black-on-white-computer-keys-3d-illustration-isolated-background.webp', name: '16464545-test-written-in-black-on-white-computer-keys-3d-illustration-isolated-background.webp', lastModified: 1638485464958, lastModifiedDate: Thu Dec 02 2021 17:51:04 GMT-0500 (Eastern Standard Time), webkitRelativePath: '', …}
    //   formData.append("photo", f, "image.jpg");
    // }

    // await axios
    //   .post(url, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       Accept: "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     setSignupDetails((prevState) => ({
    //       ...prevState,
    //       profilePicture: res.data.imagePath,
    //     }));
    //     dispatch(signup({ company: signupDetails, password: password }));

    //     setShowSignup(false);
    //     setShowSignupConfirm(true);
    //   })
    //   .catch((err) => console.log(err));
    let url = "";
    if (orgImage !== undefined && orgImage !== null) {
      url = await uploadImage(orgImage, storage);
    }

    dispatch(signup({ company: {
      ...signupDetails,
      profilePicture: url
    }, password: password }));

    setShowSignup(false);
    setShowSignupConfirm(true);
  };

  /* ============================================================================================================================== */
  /* This section will be used to call an API and send the sign up details to, currently this object is just logged in the console. */
  //console.log(signupDetails);
  /* ============================================================================================================================== */

  return (
    <div>
      <BackButton>
        <a href="/" onClick={handleBackClick}>
          <span>{backArrow}</span> Go back{" "}
        </a>
      </BackButton>
      <SignupContainer>
        <Grid container>
          <Grid item xs={6}>
            <HeaderOne>Let's create your profile</HeaderOne>
            <SubHeader>Tell us a little about your organization</SubHeader>
            <HeaderTwo>Login details</HeaderTwo>
            <InputField
              label="Email"
              placeholder="Enter your organization email"
              name="email"
              id="email"
              type="text"
              onChange={handleFormChange}
              value={signupDetails.email}
            />
            <InputField
              label="Create a Password"
              type="password"
              placeholder="Enter a password"
              name="password"
              id="password"
              checkMarkVisible={passwordCheckMark}
              onChange={passwordChange}
              value={password}
            />
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Re-enter the same password"
              name="confirm-password"
              id="confirm-password"
              checkMarkVisible={passwordConfirmCheckMark}
              errorVisible={errorVisible}
              onChange={onConfirmPasswordChange}
              value={confirmPassword}
            />
            <HeaderTwo>Organization details</HeaderTwo>
            <Paragraph>
              Are you registered as a charity or non-profit organization on the
              Canada Revenue Agency's website?
            </Paragraph>
            <div>
              <RadioGroup
                name="isRegisteredCRA"
                id="isRegisteredCRA"
                onChange={handleFormChange}
              >
                <Grid container>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="no"
                      control={<Radio color="primary" />}
                      label="No"
                      labelPlacement="end"
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </div>
            <InputField
              label="Organization Name"
              placeholder="ie. iContribute"
              name="companyName"
              id="companyName"
              onChange={handleFormChange}
              value={signupDetails.companyName}
            />
            <InputField
              label="Website"
              placeholder="ie. https://icontribute.community"
              name="url"
              id="url"
              onChange={handleFormChange}
              value={signupDetails.url}
            />
            <InputField
              label="Postal Code"
              placeholder="ie. A2H B4P"
              name="postalCode"
              id="postalCode"
              onChange={handleFormChange}
              value={signupDetails.postalCode}
            />
            <TextareaField
              label="Description"
              name="description"
              id="description"
              onChange={handleFormChange}
              placeholder="ie.We connect people who are looking for local volunteer opportunities to nonprofits who are actively recruiting"
              rows={8}
              value={signupDetails.description}
            />
            <HeaderThree>Upload an account photo or logo</HeaderThree>
          </Grid>
          <Grid item xs={6}>
            <ImageContainer>
              <SignupGraphic />
            </ImageContainer>
          </Grid>
          <Grid item xs={8}>
            <ImageDropzone
              setOrgImage={async (file: any) => {
                if (file === undefined || file === null) {
                  setOrgImage(undefined);
                  return;
                }
                setOrgImage(file[0]);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <SaveButtonContainer>
              <InteractiveButton
                disabled={submitDisabled}
                text={saveButtonText}
                onClick={submitSignupDetails}
              />
            </SaveButtonContainer>
          </Grid>
        </Grid>
      </SignupContainer>
    </div>
  );
};

export default SignUp;

const SignupContainer = styled(Container)`
  font-family: Source Sans Pro;
  height: 100%;
  padding-bottom: 150px;
`;

export const BackButton = styled.div`
  margin-top: 35px;
  margin-left: 29px;
  a {
    font-size: 12px;
    font-family: sans-serif;
    font-weight: bold;
    text-decoration: none;
    color: black;
    span {
      font-size: 12px;
    }
  }
`;

export const HeaderOne = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
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

const SaveButtonContainer = styled.div`
  text-align: right;
`;
