import styled from "styled-components";

interface EventCardProps {
  eventImage: string;
  eventName: string;
  date: Date;
  description: string;
  eventID: string;
  onClick: any;
  selected: boolean;
}

const SmallEventCard = ({
  eventImage,
  eventName,
  date,
  description,
  eventID,
  onClick,
  selected,
}: EventCardProps) => {

  return (
    <EventContainer selected={selected} onClick={onClick}>
      {eventImage === "" ? 
        <EventImage eventImage={"https://i.postimg.cc/m2gmWsvX/default-Opportunity.png"}></EventImage>
        : <EventImage eventImage={eventImage}></EventImage>
      }

      <EventContent>
        <EventHeading>{eventName}</EventHeading>
        <EventSubHeading>
          {date.toLocaleString("default", { month: "short" }) +
            " " +
            date.getDate() +
            ", " +
            date.getFullYear()}
        </EventSubHeading>
        <EventDescription>{description}</EventDescription>
      </EventContent>
    </EventContainer>
  );
};

const ImageContainer = styled.div`
  align-items: center;
  background: #edecff;
  display: flex-start;
  width: 125px;
  height: 125px;
`;

const EventContainer = styled.div<{ selected: boolean }>`
  border-bottom: 0.5px solid #9d99ff;
  flex-direction: row;
  overflow: hidden;
  padding: 10px 28px 10px 28px;
  &:hover {
    background-color: #edecff;
  }
  background-color: ${(props) => (props.selected ? "#edecff" : "#FFFFFF")};
  cursor: pointer;
`;

const EventImage = styled.div<{ eventImage: string }>`
  background-image: url("${(props) => props.eventImage}");
  background-size: cover;
  background-position: center;
  width: 125px;
  height: 125px;
  border-radius: 8px;
  margin-right: 10px;
  float: left;
`;

const EventContent = styled.div``;
const EventHeading = styled.p`
  font-size: 0.9em;
  color: #191489;
  font-weight: bold;
  margin-bottom: 3px;
  margin-top: 5px;
`;
const EventSubHeading = styled.p`
  margin-top: 0px;
  margin-bottom: 9px;
  font-size: 0.8em;
  color: #474e51;
`;

const EventDescription = styled.div`
  font-size: 0.85em;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default SmallEventCard;
