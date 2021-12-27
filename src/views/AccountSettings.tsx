import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import UploadNewPhoto from "../assets/images/UploadNewPhoto.png";
import DefaultProfilePhoto from "../assets/images/default_photo.png";
import InputField from "../components/FormElements/InputField";
import TextareaField from "../components/FormElements/TextareaField";
import Button from "../components/common/Button";
import ImageDropzone from "../components/FormElements/ImageDropzone";
import CloseIcon from "@material-ui/icons/Close";

import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

import StaticInputField from "../components/FormElements/StaticInputField";
import { uploadImage } from "@icontribute-founder/firebase-access";
import { storage } from "../configure";

//Modal-Code-Start
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { resetPassword } from "../features/user";
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);
//Modal-Code-End

const AccountSettings = () => {
  const dispatch = useDispatch();
  //Modal-Code-Start
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [imageFile, setImageFile] = React.useState<File>();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <ModalCloseIcon onClick={handleClose}></ModalCloseIcon>
        <br />
        <br />
      </div>
      <ImageDropzone
        setOrgImage={(file: any) => {
          if (file === undefined || file === null) {
            setImageFile(undefined);
            return;
          }
          setImageFile(file[0]);
        }}
      ></ImageDropzone>
      <ButtonCenter
        onClick={async () => {
          if (imageFile === undefined || imageFile === null) {
            return;
          }
          handleClose();
          const url = await uploadImage(imageFile, storage);
          setCurrProfilePic(url);
          //NEED TO SAVE NEW URL OF PICTURE TO DATABASE HERE --------------------
        }}
      >
        Confirm
      </ButtonCenter>
    </div>
  );
  //Modal-Code-End

  const { userProfile } = useSelector((state: RootState) => state.user);
  console.log("Current User: ", userProfile);

  const [currUserWebsite, setcurrUserWebsite] = React.useState(
    userProfile.website
  );
  const [currUserPostalCode, setcurrUserPostalCode] = React.useState(
    userProfile.postalCode
  );
  const [currUserDescription, setcurrUserDescription] = React.useState(
    userProfile.description
  );

  const WebsiteChangeListener = (event: any) => {
    setcurrUserWebsite(event.target.value);
  };
  const PostalCodeChangeListener = (event: any) => {
    setcurrUserPostalCode(event.target.value);
  };
  const DescriptionChangeListener = (event: any) => {
    setcurrUserDescription(event.target.value);
  };

  const [currProfilePic, setCurrProfilePic] = useState(
    userProfile.profilePicture ? userProfile.profilePicture : DefaultProfilePhoto
  );


  const [saveDetailsNoti, setSaveDetailsNoti] = useState("");
  const [saveDetailsNotiColor, setSaveDetailsNotiColor] = useState("");
  const [isSaveDetailsNotiDisplayed, setIsSaveDetailsNotiDisplayed] =
    useState(false);
  const SaveDetailsButtonHandler = () => {
    setIsSaveDetailsNotiDisplayed(true);
    if (currUserDescription === "") {
      setSaveDetailsNotiColor("#FC100D");
      setSaveDetailsNoti("Please fill the description field!");
      return;
    }
    setSaveDetailsNotiColor("#4bb543");
    setSaveDetailsNoti("Details saved successfully");
    //Need to update new details (3 state variables) to the db here -----;
  };

  const [isPasswordChangeNotiDisplayed, setIsPasswordChangeNotiDisplayed] =
    useState(false);
  const resetPasswordHandler = () => {
    setIsPasswordChangeNotiDisplayed(true);
    //Need to request a pasword change to the user email here -----;
    if (process.env.REACT_APP_ENV === "development") {
      dispatch(resetPassword({ email: process.env.REACT_APP_TEST_EMAIL! }));
    } else {
      dispatch(resetPassword({ email: userProfile.email }));
    }
  };

  return (
    <Container>
      <Left>
        <HeaderOne>Profile Settings</HeaderOne>
        <HeaderTwo>Email address</HeaderTwo>

        <StaticInputField
          label="Email"
          value={userProfile.email}
        ></StaticInputField>
        <PasswordChangeNoti isDisplayed={isPasswordChangeNotiDisplayed}>
          A link has been sent to your email to reset your passwords.
        </PasswordChangeNoti>
        <br />
        <div>
          <ButtonFloatRight onClick={resetPasswordHandler}>
            Reset Password
          </ButtonFloatRight>
        </div>

        <HeaderTwo>Organization details</HeaderTwo>

        <InputField
          type="text"
          label="Website (optional)"
          value={currUserWebsite}
          onChange={WebsiteChangeListener}
        />
        <InputField
          type="text"
          label="Postal Code (optional)"
          value={currUserPostalCode}
          onChange={PostalCodeChangeListener}
        />
        <TextareaField
          type="text"
          label="Description"
          rows="6"
          value={currUserDescription}
          onChange={DescriptionChangeListener}
        />
        <br></br>
        <div>
          <SaveButtonEventNoti
            saveDetailsNotiColor={saveDetailsNotiColor}
            isSaveDetailsNotiDisplayed={isSaveDetailsNotiDisplayed}
          >
            {saveDetailsNoti}
          </SaveButtonEventNoti>
          <ButtonFloatRight onClick={SaveDetailsButtonHandler}>
            Save details
          </ButtonFloatRight>
        </div>
        <br></br>
        <br></br>
      </Left>

      <Right>
        <ProfileImage onClick={handleOpen} currProfilePic={currProfilePic} />
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      </Right>
    </Container>
  );
};

const Left = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: auto;
  margin-left: 4%;
  margin-right: 10%;
`;

const ButtonFloatRight = styled(Button)`
  float: right;
`;

const ButtonCenter = styled(Button)`
  width: fit-content;
  margin: auto;
  margin-top: 10px;
`;

const ModalCloseIcon = styled(CloseIcon)`
  float: right;
  cursor: pointer;
`;

const PasswordChangeNoti = styled.p<{ isDisplayed: boolean }>`
  margin-bottom: 0px;
  font-family: "Source Sans Pro";
  display: ${(props) => (props.isDisplayed ? "block" : "none")};
`;

const SaveButtonEventNoti = styled.p<{
  saveDetailsNotiColor: string;
  isSaveDetailsNotiDisplayed: boolean;
}>`
  margin-top: 0px;
  font-family: "Source Sans Pro";
  color: ${(props) => props.saveDetailsNotiColor};
  display: ${(props) => (props.isSaveDetailsNotiDisplayed ? "block" : "none")};
`;

const ProfileImage = styled.div<{ currProfilePic: string }>`
  background: url(${(props) => (props.currProfilePic ? props.currProfilePic : "https://i.postimg.cc/Zn3DvjXF/Untitled.png")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  box-shadow: 0 2px 2px 0px rgba(28, 28, 27, 0.3);

  cursor: pointer;
  width: 200px;
  height: 200px;
  margin-top: 2%;
  margin-left: 10%;

  &:hover {
    transition: 0.3s;
    background: url(${UploadNewPhoto});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

const HeaderOne = styled.h2`
  font-family: Source Sans Pro;
  font-size: 30px;
  font-weight: bold;
  margin-top: 2%;
  margin-bottom: 1%;
`;

const HeaderTwo = styled.h2`
  font-family: Source Sans Pro;
  font-size: 24px;
  font-weight: normal;
  margin-bottom: -2%;
`;

export default AccountSettings;
