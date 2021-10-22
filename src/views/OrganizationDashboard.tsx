import { OpportunityCollection } from "@icontribute-founder/firebase-access";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SmallEventCard from "../components/SmallEventCard";
import { firebaseApp, firestore } from "../configure";

const OrganizationDashboard = () => {
    const [indexes, setIndexes] = useState([false, false]);
    const [opportunities, setOpportunity] = useState([]);

    const defaultIndexesBasedOnOpsLength: boolean[] = [];

    useEffect(() => {
        const getOpportunity = async () => {
            const opportunityCollection = OpportunityCollection.create(
                firebaseApp,
                firestore
            );
            const data: any = await opportunityCollection.getOpportunities();
            setOpportunity(data);
            console.log("Data: ", data);

            for (let i = 0; i < opportunities.length; i++) {
                defaultIndexesBasedOnOpsLength[i] = false;
            }
            setIndexes(defaultIndexesBasedOnOpsLength);
        };
        getOpportunity();
    }, []);
    const handleCardOnClick = (e: any, i: any) => {
        const newIndexes = [false, false];
        newIndexes[i] = true;
        setIndexes(newIndexes);
    };

    const ListEventCardComponents = opportunities.map((props: any, i) => (
        <SmallEventCard
            eventImage={props.eventImage}
            eventName={props.eventName}
            date={new Date(props.date.seconds * 1000)}
            description={props.description}
            eventID={props.eventID}
            onClick={(e: any) => handleCardOnClick(e, i)}
            selected={indexes[i]}
        ></SmallEventCard>
    ));

    return (
        <OrganizationDashboardPage>
            <EventsListContainer>{ListEventCardComponents}</EventsListContainer>
        </OrganizationDashboardPage>
    );
};

const OrganizationDashboardPage = styled.div`
    height: calc(100% - 85px);
`;

const EventsListContainer = styled.div`
    width: 44%;
    font-family: Source Sans Pro;
    overflow-y: scroll;
    height: 100%;
`;

export default OrganizationDashboard;
