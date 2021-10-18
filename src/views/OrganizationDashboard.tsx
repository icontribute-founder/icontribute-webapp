import { useEffect, useState } from "react";
import styled from "styled-components";
import SmallEventCard from "../components/SmallEventCard";
import config from "../firebaseConfig.json";
import { OpportunityCollection } from "../firebase-access/src/";

const OrganizationDashboard = () => {
    const [indexes, setIndexes] = useState([false]);
    const [opportunities, setOpportunity] = useState([]);

    const defaultIndexesFromOpsLength: boolean[] = [];

    useEffect(() => {
        const getOpportunity = async () => {
            const opportunityCollection = OpportunityCollection.create(config);
            const data: any = await opportunityCollection.getOpportunities();
            setOpportunity(data);
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                defaultIndexesFromOpsLength[i] = false;
            }
            setIndexes(defaultIndexesFromOpsLength);
        };
        getOpportunity();
    }, []);

    const handleCardOnClick = (e: any, i: any) => {
        const newIndexes = defaultIndexesFromOpsLength;
        newIndexes[i] = true;
        setIndexes(newIndexes);

    };

    const ListEventCardComponents = opportunities.map((props: any, i) => (
        <SmallEventCard
            eventImage={props.eventImage}
            eventName={props.eventName}
            date={new Date(parseInt(props.date.seconds))}
            deadline={new Date(parseInt(props.deadline.seconds))}
            description={props.description}
            eventID={props.eventID}
            onClick={(e: any) => handleCardOnClick(e, i)}
            selected={indexes[i]}
        ></SmallEventCard>
    ));

    return (
        <OrganizationDashboardPage>
            <EventsListContainer>{ListEventCardComponents}</EventsListContainer>
            <EventDetails></EventDetails>
        </OrganizationDashboardPage>
    );
};

const OrganizationDashboardPage = styled.div`
    height: calc(100% - 85px);
`;

const EventsListContainer = styled.div`
    display: inline-block;
    width: 44%;
    font-family: Source Sans Pro;
    overflow-y: scroll;
    height: 100%;
`;

const EventDetails = styled.div`
    display: inline-block;
    width: 56%;
    font-family: Source Sans Pro;
    overflow-y: scroll;
    height: 100%;
`;

export default OrganizationDashboard;
