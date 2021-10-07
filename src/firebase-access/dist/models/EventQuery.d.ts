import { GeoPoint } from "firebase/firestore";
export declare enum EventType {
    ALL = "all",
    IN_PERSON = "in-person",
    VIRTUAL = "virtual"
}
export interface EventQuery {
    queryText?: string;
    location?: GeoPoint;
    address?: string;
    distance?: number;
    beginningDate?: Date;
    endDate?: Date;
    interests?: string[];
    sortType: string;
    eventType: EventType;
}
