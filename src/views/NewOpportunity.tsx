import { Button, Container } from "@material-ui/core";
import HowToApply from "../components/NewOpportunity/HowToApply";
import BasicDetails from "../components/NewOpportunity/BasicDetails";
import OpportunityDetails from "../components/NewOpportunity/OpportunityDetails";
import { useDispatch, useSelector } from "react-redux";
import { save } from "../features/newOpportunity";
import InteractiveButton from "../components/Buttons/InteractiveButton";
import styled from "styled-components";
import { RootState } from "../store";
import { BackButton, HeaderOne } from "./SignUp";
import { Subtitle } from "../components/styles";
import { useHistory } from "react-router";

const SaveButtonContainer = styled.div`
    text-align: right;
    margin-top: -120px;
    margin-right: -200px;
`;

const NewOpportunityContainer = styled(Container)`
    padding-bottom: 40px;
    font-family: Source Sans Pro;
`;

const ContentContainer = styled.div`
    margin-top: 60px;
`;

const NewOpportunity = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnClick = (e: any) => {
        e.preventDefault();
        dispatch(save());
    };

    const { eventName, address } = useSelector(
        (state: RootState) => state.newOpportunity
    );

    const handleBackClick = () => {
        history.push("/");
    };

    const canSubmit = eventName !== "" && address !== "";

    return (
        <div>
            <BackButton>
                <Button onClick={handleBackClick}>Back to dashboard</Button>
            </BackButton>
            <NewOpportunityContainer fixed maxWidth="md">
                <HeaderOne>Create an opportunity</HeaderOne>
                <Subtitle>
                    Tell us what you’re looking for with easy-to-use opportunity
                    templates to find relevant and qualified candidates.
                </Subtitle>
                <ContentContainer>
                    <HowToApply />
                    <BasicDetails />
                    <OpportunityDetails />
                    <SaveButtonContainer>
                        <InteractiveButton
                            disabled={!canSubmit}
                            text="Save & Preview"
                            onClick={handleOnClick}
                        />
                    </SaveButtonContainer>
                </ContentContainer>
            </NewOpportunityContainer>
        </div>
    );
};

export default NewOpportunity;
