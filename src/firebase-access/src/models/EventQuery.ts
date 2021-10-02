import { GeoPoint } from "firebase/firestore";

export enum EventType {
    ALL = "all",
    IN_PERSON = "in-person",
    VIRTUAL = "virtual",
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

// export class EventQuery {
// queryText?: string;
// location?: object;
// address?: string;
// distance?: number;
// beginningDate: Date;
// endDate: Date;
// interests?: string[];
// sortType: string;
// eventType: EventType;

//     constructor() {
//         this.queryText = "";
//         this.location = new GeoPoint(45.42, -75.69);
//         this.address = "";
//         this.distance = 100;
//         this.beginningDate = new Date();
//         this.endDate = new Date(+new Date() + 1000 * 60 * 60 * 24 * 60);
//         this.interests = [];
//         this.sortType = "date";
//         this.eventType = EventType.ALL;
//     }
// }
