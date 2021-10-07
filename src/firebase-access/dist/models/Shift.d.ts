import Repeat from "./Repeat";
export default interface Shift {
    start: Date;
    end: Date;
    limit: number;
    recurring: boolean;
    active: boolean;
    fullDay: boolean;
    users: string[];
    repeat?: Repeat;
    spotsFilled: number;
}
