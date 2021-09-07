import { Box, Button, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { save, publish } from "../features/newOpportunity";
import { RootState } from "../store";
import { BlueButton, LightBlueButton } from "./styles";

const PublishButton = styled(BlueButton)`
    width: 168px;
`;

const SaveButton = styled(LightBlueButton)`
    width: 168px;
    margin-right: 12px;
`;

const Footer = ({ lastStep, handleFinish }: any) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const { hostingType } = useSelector(
    //     (state: RootState) => state.newOpportunity
    // );

    // const history = useHistory();
    // if (true) {
    //     history.push("/new-opportunity-created");
    // }

    const handleSave = () => {
        dispatch(save());
    };

    const handlePublish = () => {
        dispatch(publish());
    };

    return (
        <Box display="flex" justifyContent="flex-end" mt={5} mb={5}>
            <SaveButton onClick={handlePublish}>Save as Draft</SaveButton>
            <PublishButton onClick={handleSave}>Publish</PublishButton>
        </Box>
    );
};

export default Footer;
