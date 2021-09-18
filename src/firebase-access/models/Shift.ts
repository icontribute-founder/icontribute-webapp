import Repeat from "./Repeat";

export default interface Shift {
    start: Date;
    end: Date;
    limit: number;
    recurring: boolean;
    active: boolean;
    fullDay: boolean; // to remove
    users: string[];
    repeat?: Repeat;
    spotsFilled: number;
}

// var today = new Date();
// var nextweek = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 7
// );

// export default class Shift {
//     start: Date;
//     end: Date;
//     limit: number;
//     recurring: boolean;
//     active: boolean;
//     fullDay: boolean; // to remove
//     users: string[];
//     repeat: Repeat;
//     spotsFilled: number;

//     constructor(
//         start?: Date,
//         end?: Date,
//         limit?: number
// recurring?: boolean,
// active?: boolean,
// fullDay?: boolean // to remove
//     ) {
//         this.start = start || new Date();
//         this.end = end || nextweek;
//         this.limit = limit || 0;
//         this.recurring = false;
//         this.active = true;
//         this.fullDay = false; // to remove
//         this.users = [];
//         this.repeat = new Repeat();
//         this.spotsFilled = 0;
//     }
// }
