export interface Organization {
    email: string;
    password: string;
    registered: boolean;
    name: string;
    website: string;
    postalCode: string;
    description: string;
    categories: OrganizationCategory[];
    profilePictureURL: string;
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
