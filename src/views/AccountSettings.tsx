import React, { useState } from "react";
// import InputField from "../components1/common/InputField";
// import { StyledButton } from "../components1/OpportunityCard/style";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import UploadNewPhoto from "../assets/images/UploadNewPhoto.png";
import InputField from "../components/FormElements/InputField";
import TextareaField from "../components/FormElements/TextareaField";
import Button from "../components/common/Button";
import ImageDropzone from "../components/FormElements/ImageDropzone";
import CloseIcon from "@material-ui/icons/Close";

import { RootState } from "../store";
import { useSelector } from "react-redux";

import { editOpportunity } from "../features/opportunity";
import { useDispatch } from "react-redux";

//Modal-Start
import StaticInputField from "../components/FormElements/StaticInputField";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

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
//Modal-End

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
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    height: 100%;
    width: auto;
    margin-left: 10%;
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

const AccountSettings = () => {
    //Modal-Start
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let tempPicContainer = "";
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div>
                <ModalCloseIcon onClick={handleClose}></ModalCloseIcon>
                <br />
                <br />
            </div>
            <ImageDropzone
                setOrgImage={(props: any) => {
                    if (props !== null){
                        tempPicContainer = URL.createObjectURL(props[0]);
                    }
                    else{
                        tempPicContainer = "";
                    }
                }}
            ></ImageDropzone>
            <ButtonCenter
                onClick={() => {
                    if (tempPicContainer !== "") {
                        setCurrProfilePic(tempPicContainer);
                        handleClose();
                        //NEED TO SAVE PIC TO DATABASE HERE --------------------
                    }
                }}
            >
                Confirm
            </ButtonCenter>
        </div>
    );
    //Modal-End

    const currUser = useSelector((state: RootState) => state.newOrganization);

    const [currUserWebsite, setcurrUserWebsite] = React.useState(
        currUser.website
    );
    const [currUserPostalCode, setcurrUserPostalCode] = React.useState(
        currUser.postalCode
    );
    const [currUserDescription, setcurrUserDescription] = React.useState(
        currUser.description
    );

    const WebsiteChangeListener = (props: any) => {
        setcurrUserWebsite(props.target.value);
    };
    const PostalCodeChangeListener = (props: any) => {
        setcurrUserPostalCode(props.target.value);
    };
    const DescriptionChangeListener = (props: any) => {
        setcurrUserDescription(props.target.value);
    };

    const [currProfilePic, setCurrProfilePic] = useState(
        currUser.profilePicture
    );

    const dispatch = useDispatch();
    const SaveDetailsButtonHandler = () => {
        if (currUserDescription === "") {
            alert("Please fill out all the required input fields!");
            return;
        }
        console.log("Update new details to the db");
    };

    const [isNotiDisplayed, setIsNotiDisplayed] = useState(false);
    const resetPasswordHandler = () => {
        setIsNotiDisplayed(true);
    };

    return (
        <Container>
            <Left>
                <h1 style={h1}>iContribute</h1>

                <h2 style={h2}>Email address</h2>
                <StaticInputField
                    label="Email"
                    value={currUser.email}
                ></StaticInputField>
                <PasswordChangeNoti isDisplayed={isNotiDisplayed}>
                    A link has been sent to your email to reset your passwords.
                </PasswordChangeNoti>
                <br />
                <div>
                    <ButtonFloatRight onClick={resetPasswordHandler}>
                        Reset Password
                    </ButtonFloatRight>
                </div>

                <h2 style={h2}>Organization details</h2>

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
                    <ButtonFloatRight onClick={SaveDetailsButtonHandler}>
                        Save details
                    </ButtonFloatRight>
                </div>
                <br></br>
                <br></br>
            </Left>

            <Right>
                <ProfileImage
                    onClick={handleOpen}
                    currProfilePic={currProfilePic}
                />
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

const ProfileImage = styled.div<{ currProfilePic: string }>`
    background: url(${(props) => props.currProfilePic});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    cursor: pointer;
    width: 200px;
    height: 200px;

    &:hover {
        transition: 0.3s;
        background: url(${UploadNewPhoto});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
`;

const h1: React.CSSProperties = {
    fontFamily: "Source Sans Pro",
};
const h2: React.CSSProperties = {
    marginBottom: "0px",
    fontFamily: "Source Sans Pro",
};

export default AccountSettings;
