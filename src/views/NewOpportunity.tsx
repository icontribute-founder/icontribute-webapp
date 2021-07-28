import { clone } from "lodash";
import { useState } from "react";
import styled from "styled-components";
import ApplicationDetails from "./ApplicationDetail";
import OpportunityDetails from "./OpportunityDetails";
import Stepper from "../components/common/Stepper";
import { Grid } from "@material-ui/core";

const NewOpportunityContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const NewOpportunitySide = styled.div`
    position: fixed;
    margin-top: 100px;
    margin-left: 20px;
`;

const NewOpportunityContent = styled.div`
    width: auto;
    height: 100%;
    position: relative;
    padding-bottom: 80px;
    margin-top: -20px;
`;

const NewOpportunityControl = styled.div`
    position: fixed;
    padding: 12px 0px;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0px -4px 40px rgba(48, 48, 48, 0.08);
    width: 100%;
    left: 0px;
    bottom: 0px;
    * {
        margin-right: 54px;
    }
    *:last-child {
        margin-right: 104px;
    }
`;

const NextButton = styled.button`
    background-color: #026896;
    border-radius: 24px;
    &:hover {
        cursor: pointer;
    }
    color: white;
    border: none;
    font-size: 16px;
    padding: 10px;
    padding-left: 50px;
    padding-right: 50px;
    text-transform: uppercase;
`;

const BackButton = styled.button`
    background-color: #026896;
    border-radius: 24px;
    &:hover {
        cursor: pointer;
    }
    color: white;
    border: none;
    font-size: 16px;
    padding: 10px;
    padding-left: 50px;
    padding-right: 50px;
    text-transform: uppercase;
`;

const SaveExistButton = styled.button`
    background-color: white;
    &:hover {
        cursor: pointer;
    }
    border: 3px solid #026896;
    box-sizing: border-box;
    border-radius: 24px;
    padding: 10px;
    padding-left: 50px;
    padding-right: 50px;
    color: #026896;
    text-transform: uppercase;
`;

const NewOpportunity = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [steps, setSteps] = useState([
        {
            name: "Application Details",
            active: true,
            completed: true,
            component: <ApplicationDetails />,
        },
        {
            name: "Opportunity Details",
            active: false,
            completed: false,
            component: <OpportunityDetails />,
        },
        {
            name: "Review",
            active: false,
            completed: false,
            component: <div>Review</div>,
        },
    ]);

    const handleNextButtonClick = () => {
        const newStep = currentStep + 1;
        if (newStep < steps.length) {
            setCurrentStep(newStep);
            const newSteps = clone(steps);
            // current step needs to be deactivated
            newSteps[currentStep] = {
                ...newSteps[currentStep],
                active: false,
            };
            // new step needs to be activated
            newSteps[newStep] = {
                ...newSteps[newStep],
                active: true,
                completed: true,
            };
            setSteps(newSteps);
        }
    };

    const handleBackButtonClick = () => {
        const newStep = currentStep - 1;
        if (newStep >= 0) {
            setCurrentStep(newStep);
            const newSteps = clone(steps);
            // current step needs to be deactivated
            newSteps[currentStep] = {
                ...newSteps[currentStep],
                active: false,
                completed: false,
            };
            // new step needs to be activated
            newSteps[newStep] = {
                ...newSteps[newStep],
                active: true,
                completed: true,
            };
            setSteps(newSteps);
        }
    };

    const { component: content } = steps[currentStep];

    return (
        <div>
            <NewOpportunityContainer>
                <NewOpportunitySide>
                    <Stepper steps={steps} />
                </NewOpportunitySide>

                <NewOpportunityContent>
                    <Grid container>
                        <Grid item md={2}></Grid>
                        <Grid item md={10}>
                            {content}
                        </Grid>
                    </Grid>
                </NewOpportunityContent>
            </NewOpportunityContainer>
            <NewOpportunityControl>
                <SaveExistButton>Save & Exist</SaveExistButton>
                <BackButton onClick={handleBackButtonClick}>Back</BackButton>
                <NextButton onClick={handleNextButtonClick}>Next</NextButton>
            </NewOpportunityControl>
        </div>
    );
};

export default NewOpportunity;
