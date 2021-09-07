import { Container } from "@material-ui/core";
import OpportunityReview from "../components/OpportunityReview";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Box, Button, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { save, publish } from "../features/newOpportunity";
import { RootState } from "../store";
import { BlueButton, LightBlueButton } from "../components/styles";

const Content = styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
`;

const Title = styled.h1`
    width: 100%;
    font-family: Source Sans Pro;
    font-weight: bold;
    font-size: 40px;
    line-height: 110%;
    margin: 0px;
`;

const Subtitle = styled.p`
    width: 100%;
    font-family: Source Sans Pro;
    font-size: 14px;
    color: #676767;
`;

const PublishButton = styled(BlueButton)`
    width: 168px;
`;

const SaveButton = styled(LightBlueButton)`
    width: 168px;
    margin-right: 12px;
`;

const ReviewOpportunity = () => {
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
        history.push("/new-opportunity-confirm");
    };

    return (
        <Container fixed maxWidth="md">
            <Title>Opportunity Review</Title>
            <Subtitle>
                Scroll through to see if we got all the important information.
                If everything looks good, you are all set to post the event or
                save it as a draft!
            </Subtitle>
            <Content>
                <OpportunityReview />
            </Content>
            {/* <Footer /> */}
            <Box display="flex" justifyContent="flex-end" mt={5} mb={5}>
                <SaveButton onClick={handleSave}>Save as Draft</SaveButton>
                <PublishButton onClick={handlePublish}>Publish</PublishButton>
            </Box>
        </Container>
    );
};

export default ReviewOpportunity;
