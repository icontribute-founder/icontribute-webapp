import styled from "styled-components";
import { Container } from "@material-ui/core";
import OpportunityReview from "./OpportunityReview";
import Footer from "./Footer";
import Header from "./Header";

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

const Content = styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
`;

const NewOpportunity = () => {
    return (
        <>
            <Header />
            <Container fixed maxWidth="md">
                <Title>Opportunity Review</Title>
                <Subtitle>
                    Scroll through to see if we got all the important
                    information. If everything looks good, you are all set to
                    post the event or save it as a draft!
                </Subtitle>
                <Content>
                    <OpportunityReview />
                </Content>
                <Footer />
            </Container>
        </>
    );
};

export default NewOpportunity;
