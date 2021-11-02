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
import { useHistory, useParams } from "react-router";
import { useState } from "react";
import { ArrowBackIos } from "@material-ui/icons";

const SaveButtonContainer = styled.div`
    text-align: right;
    margin-top: -120px;
    margin-right: -200px;
`;

const OpportunityContainer = styled(Container)`
    padding-bottom: 40px;
    font-family: Source Sans Pro;
`;

const ContentContainer = styled.div`
    margin-top: 60px;
`;

const StyledOpportunity = styled.div`
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

type OpportunityParams = {
    action: string;
};

const Opportunity = () => {
    const history = useHistory();

    const { action } = useParams<OpportunityParams>();
    console.log(action);

    const [imageUploading, setImageUploading] = useState(false);

    const handleOnClick = (e: any) => {
        e.preventDefault();
        history.push("/new-opportunity-review");
    };

    const { eventName, address } = useSelector(
        (state: RootState) => state.newOpportunity
    );
    console.log(eventName);

    const handleBackClick = () => {
        history.push("/");
    };

    const canSubmit = eventName !== "" && address !== "" && !imageUploading;

    let title: string;
    switch (action) {
        case "create":
            title = "Create an opportunity";
            break;
        case "edit":
            title = "Edit an opportunity";
            break;
        case "duplicate":
            title = `Copy of ${eventName}`;
            break;
        default:
            title = "";
            break;
    }

    return (
        <StyledOpportunity>
            <BackButton onClick={handleBackClick}>
                <ArrowBackIos style={{ fontSize: 12 }} />
                Back to dashboard
            </BackButton>
            <OpportunityContainer fixed maxWidth="md">
                <HeaderOne>{title}</HeaderOne>
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
            </OpportunityContainer>
        </StyledOpportunity>
    );
};

export default Opportunity;
