import { GeoPoint } from "firebase/firestore";
import { Event, HostingType } from "./Event";
import Shift from "./Shift";
import { Student, UserType, Company } from "./User";

export * from "./Event";
export * from "./EventQuery";
export * from "./User";

export const defaultStudent: Readonly<Student> = {
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
    savedEvents: [],
    school: "",
    notifications: [],
    numUnreadNotifications: 0,
    verified: false,
    backgroundPicture: "",
    profilePicture: "",
    type: UserType.STUDENT,
};

export const defaultCompany: Readonly<Company> = {
    email: "",
    postalCode: "",
    notifications: [],
    numUnreadNotifications: 0,
    verified: false,
    backgroundPicture: "",
    profilePicture: "",
    companyName: "",
    event: [],
    rating: 0,
    reviews: [],
    description: "",
    website: "",
    categories: [],
    type: UserType.COMPANY,
};

export const defaultEvent: Readonly<Event> = {
    eventID: "",
    eventName: "",
    eventImage: "",
    description: "",
    companyName: "",
    edited: false,
    email: "",
    url: "",
    shifts: [],
    categories: [],
    address: "",
    coordinates: new GeoPoint(0, 0),
    active: true,
    type: HostingType.External,
    deadline: new Date(),
    date: new Date(),
    verified: false,
    role: "",
    requirements: "",
    notes: "",
    reviews: [],
    virtual: false,
    deleted: false,
};

const today = new Date();
const nextweek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
);

export const defaultShift: Readonly<Shift> = {
    start: today,
    end: nextweek,
    limit: 0,
    recurring: false,
    active: true,
    fullDay: false,
    users: [],
    repeat: undefined,
    spotsFilled: 0,
};
