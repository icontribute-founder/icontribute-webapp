export interface Opportunity {
    eventName: string;
    companyName: string;
    eventImageURL: string;
    shifts: Shift[];
    categories: OpportunityCategory[];
    description: string;
    email: string;
    address: string;
    type: OpportunityType;
    date: number;
    deadline: number;
    role: string;
    requirements: string;
    url: string;
    hostingType: HostingType;
    notes: string;
}

export enum OpportunityCategory {
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

export enum OpportunityType {
    Inperson = "IN_PERSON",
    Virtual = "VIRTUAL",
}

export enum HostingType {
    Internal = "INTERNAL",
    External = "EXTERNAL",
}

export interface Shift {
    start: number;
    end: number;
    recurrence: string;
}
