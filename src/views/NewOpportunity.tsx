import { Button, Container } from "@material-ui/core";
import HowToApply from "../components/NewOpportunity/HowToApply";
import BasicDetails from "../components/NewOpportunity/BasicDetails";
import OpportunityDetails from "../components/NewOpportunity/OpportunityDetails";
import { useDispatch } from "react-redux";
import { save } from "../features/newOpportunity";

const NewOpportunity = () => {
    const dispatch = useDispatch();

    const handleOnClick = (e: any) => {
        e.preventDefault();
        dispatch(save());
    };

    return (
        <Container fixed maxWidth="md">
            <HowToApply />
            <BasicDetails />
            <OpportunityDetails />
            <Button onClick={handleOnClick}>Save & Preview</Button>
        </Container>
    );
};

export default NewOpportunity;
