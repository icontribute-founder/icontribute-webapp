import Review from "./Review";
import Notification from "./Notification";

export enum UserType {
    STUDENT = "student",
    COMPANY = "company",
}

export enum OrganizationCategory {
    Education = "Education",
    Animal = "Animal",
    ArtCulture = "ArtCulture",
    Sports = "Sports",
    HealthCare = "HealthCare",
    Environment = "Environment",
    Children = "Children",
    Other = "Other",
}

export interface BasicUser {
    email: string;
    postalCode: string;
    notifications: Notification[];
    numUnreadNotifications: number;
    verified: boolean;
    backgroundPicture: string;
    profilePicture: string;
    type: UserType;
}

export interface Student extends BasicUser {
    firstName: string;
    lastName: string;
    savedEvents: string[];
    school: string;
}

export interface Company extends BasicUser {
    companyName: string;
    event: string[];
    rating: number;
    reviews: Review[];
    description: string;
    website: string;
    categories: OrganizationCategory[];
}
