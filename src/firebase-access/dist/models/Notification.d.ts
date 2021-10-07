export default interface Notification {
    sourceEmail: string;
    eventID: string;
    eventName: string;
    sourceUserName: string;
    read: boolean;
    type: string;
    date: Date;
    sourceProfilePicture: string;
}
