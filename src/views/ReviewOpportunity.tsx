import { Container } from "@material-ui/core";
import OpportunityReview from "../components/OpportunityReview";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../store";
import { BlueButton } from "../components/styles";
import { createOpportunity, editOpportunity } from "../features/opportunity";
import { getOpportunitiesByIds } from "../features/opportunities";

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
  float: right;
  margin-bottom: 20px;
`;

const ReviewOpportunity = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { opportunity, action } = useSelector(
    (state: RootState) => state.opportunity
  );

  const { userProfile } = useSelector((state: RootState) => state.user);

  const userId = userProfile.email;

  const handlePublish = () => {
    switch (action) {
      case "create":
        dispatch(createOpportunity({ userId, opportunity }));
        break;
      case "edit":
        dispatch(
          editOpportunity({ eventId: opportunity.eventID, fields: opportunity })
        );
        break;
      default:
        break;
    }
    dispatch(getOpportunitiesByIds({ eventIds: userProfile.event }));
    history.push("/new-opportunity-confirm");
  };

  return (
    <Container fixed maxWidth="md">
      <Title>Opportunity Review</Title>
      <Subtitle>
        Scroll through to see if we got all the important information. If
        everything looks good, you are all set to post the event or save it as a
        draft!
      </Subtitle>
      <Content>
        <OpportunityReview />
      </Content>
      <PublishButton onClick={handlePublish}>Publish</PublishButton>
    </Container>
  );
};

export default ReviewOpportunity;
