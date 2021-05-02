import React from "react";
import { Circle, Step, StepName, StepperContainer } from "./style";

interface props {
    steps: {
        name: string;
        active: boolean;
        completed: boolean;
    }[];
}

const Stepper = ({ steps }: props) => {
    // const steps = [
    //     {
    //         name: "Application Details",
    //         active: true,
    //         completed: true,
    //     },
    //     {
    //         name: "Basic Details",
    //         active: false,
    //         completed: false,
    //     },
    //     {
    //         name: "Opportunity Details",
    //         active: false,
    //         completed: false,
    //     },
    //     {
    //         name: "Review",
    //         active: false,
    //         completed: false,
    //     },
    // ];
    return (
        <StepperContainer>
            {steps.map(({ name, active, completed }) => (
                <Step completed={completed} key={name}>
                    <Circle active={active} />
                    <StepName>{name}</StepName>
                </Step>
            ))}
        </StepperContainer>
    );
};
export default Stepper;
