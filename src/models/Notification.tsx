export default class Notification {
    sourceEmail: string;
    eventID: string;
    eventName: string;
    sourceUserName: string;
    read: boolean;
    type: string;
    date: Date;
    sourceProfilePicture: string;
    constructor(
      sourceEmail?: string,
      eventID?: string,
      eventName?: string,
      sourceUserName?: string,
      read?: boolean,
      type?: string,
      sourceProfilePicture?: string,
    ) {
      this.sourceEmail = sourceEmail || "";
      this.eventID = eventID || "";
      this.eventName = eventName || "";
      this.sourceUserName = sourceUserName || "";
      this.read = read || false;
      this.type = type || "";
      this.date = new Date();
      this.sourceProfilePicture = sourceProfilePicture || "";
    }
  }