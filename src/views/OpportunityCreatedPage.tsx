import styled from "styled-components";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import OpportunityCreatedSvg from "../assets/images/opportunityCreated.svg";
import { BlueButton, LightBlueButton } from "../components/styles";

const H1 = styled.h1`
    font-family: Source Sans Pro;
    font-weight: bold;
    font-size: 36px;
`;

const H2 = styled.h2`
    font-family: Source Sans Pro;
    font-weight: bold;
    font-size: 26px;
`;

const DashboardButton = styled(BlueButton)`
    width: 247px;
    font-weight: bold;
    font-size: 16px;
    margin-right: 14px;
`;

const ShareButton = styled(LightBlueButton)`
    width: 247px;
    font-weight: bold;
    font-size: 16px;
`;

const ButtonGroup = styled.div`
    margin-top: 58px;
    display: flex;
    flex-direction: row;
`;

const OpportunityCreatedPage = () => {
    const history = useHistory();
    const handleDashboardClick = () => {
        history.push("/dashboard");
    };
    const handleShareClick = () => {
        history.push("/dashboard");
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <H1>Your opportunity has been created!</H1>

            <img src={OpportunityCreatedSvg} alt="OpportunityCreatedSvg" />

            <H1>Research Assistant</H1>
            <H2>Canadian Cancer Society</H2>
            <H2>The details can be found on your opportunities page.</H2>

            <ButtonGroup>
                <DashboardButton onClick={handleDashboardClick}>
                    Go to Dashboard
                </DashboardButton>

                <ShareButton onClick={handleShareClick}>Share</ShareButton>
            </ButtonGroup>
        </Box>
    );
};

export default OpportunityCreatedPage;
