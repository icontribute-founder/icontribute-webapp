import { Container } from "@material-ui/core";
import HowToApply from "../components/NewOpportunity/HowToApply";
import BasicDetails from "../components/NewOpportunity/BasicDetails";
import OpportunityDetails from "../components/NewOpportunity/OpportunityDetails";
import { useSelector } from "react-redux";
import InteractiveButton from "../components/Buttons/InteractiveButton";
import styled from "styled-components";
import { RootState } from "../store";
import { HeaderOne } from "./SignUp";
import { Subtitle } from "../components/styles";
import { useHistory } from "react-router";
import { useState } from "react";
import { ArrowBackIos } from "@material-ui/icons";

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

const StyledNewOpportunity = styled.div`
    > * {
        &:first-child {
            margin-left: 20px;
        }
    }
`;

const BackButton = styled.button`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    background: none;
    color: inherit;
    border: none;
    color: #000000;

    &:hover {
        cursor: pointer;
    }
`;

const NewOpportunity = () => {
    const history = useHistory();

    const [imageUploading, setImageUploading] = useState(false);

    const handleOnClick = (e: any) => {
        e.preventDefault();
        history.push("/new-opportunity-review");
    };

    const { eventName, address } = useSelector(
        (state: RootState) => state.newOpportunity
    );

    const handleBackClick = () => {
        history.push("/");
    };

    const canSubmit = eventName !== "" && address !== "" && !imageUploading;

    return (
        <StyledNewOpportunity>
            <BackButton onClick={handleBackClick}>
                <ArrowBackIos style={{ fontSize: 12 }} />
                Back to dashboard
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
                    <OpportunityDetails setImageUploading={setImageUploading} />
                    <SaveButtonContainer>
                        <InteractiveButton
                            disabled={!canSubmit}
                            text="Save & Preview"
                            onClick={handleOnClick}
                        />
                    </SaveButtonContainer>
                </ContentContainer>
            </NewOpportunityContainer>
        </StyledNewOpportunity>
    );
};

export default NewOpportunity;
