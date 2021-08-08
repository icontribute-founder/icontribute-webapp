export interface Opportunity {
    eventName: string;
    companyName: string;
    eventImageURL: string;
    shifts: Shift[];
    categories: string[];
    description: string;
    email: string;
    address: string;
    type?: OpportunityType | undefined;
    date?: Date | undefined;
    deadline?: Date | undefined;
    role: string;
    requirements: string;
    url: string;
    hostingType: HostingType;
    notes: string;
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
    start: Date;
    end: Date;
}
