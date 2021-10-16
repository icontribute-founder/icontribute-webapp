export enum NotificationType {
    Edited = "edited",
    UserApplied = "userApplied",
    CompanyApplied = "companyApplied",
    Delete = "delete",
    Review = "review",
}

export interface Notification {
    sourceEmail: string;
    eventID: string;
    eventName: string;
    sourceUserName: string;
    read: boolean;
    type: string;
    date: Date;
    sourceProfilePicture: string;
}
