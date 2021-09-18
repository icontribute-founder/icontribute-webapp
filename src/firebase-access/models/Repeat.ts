export default interface Repeat {
    type: string;
    days: string[];
    repeatDeadline: Date;
}

// export default class Repeat {
//     type: string;
//     days: string[];
//     repeatDeadline: Date;

//     constructor();
//     constructor(type: string, days: string[], repeatDeadline: Date);
//     constructor(type?: string, days?: string[], repeatDeadline?: Date) {
//         this.type = type || "";
//         this.days = days || [];
//         this.repeatDeadline = repeatDeadline || new Date();
//     }
// }
