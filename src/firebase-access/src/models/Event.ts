import { GeoPoint } from "firebase/firestore";
import Shift from "./Shift";
import Review from "./Review";

export enum HostingType {
    Internal = "iContribute",
    External = "redirect",
}

export enum EventCategory {
    Education = "Education",
    Animal = "Animal",
    Art = "Art",
    Sports = "Sports",
    Healthcare = "Healthcare",
    Environment = "Environment",
    Charity = "Charity",
    Tutoring = "Tutoring",
    Other = "Other",
}

export interface Event {
    eventID: string;
    eventImage: string;
    eventName: string;
    companyName: string;
    shifts: Shift[];
    categories: string[];
    description: string;
    email: string;
    coordinates: GeoPoint;
    address: string;
    active: boolean;
    type: HostingType;
    date: Date;
    deadline: Date;
    verified: boolean;
    role: string;
    requirements: string;
    url: string;
    notes: string;
    edited: boolean;
    reviews: Review[];
    virtual: boolean;
    deleted: boolean;
}
