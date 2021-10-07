import { FirebaseOptions } from "@firebase/app-types";
import ICFirestoreCollection from "./collection";
import { EventQuery, Event } from "./models";
export declare class OpportunityCollection extends ICFirestoreCollection {
    constructor(options: FirebaseOptions, name?: string | undefined);
    static create(options: FirebaseOptions, name?: string | undefined): OpportunityCollection;
    private buildOpportunityQuery;
    getOpportunities(eventQuery?: EventQuery): Promise<{
        id: string;
    }[]>;
    getOpportunityById(id: string): Promise<{
        id: string;
    } | null>;
    createOpportunity(userId: string, event: Event): Promise<string>;
    updateOpportunity(id: string, fields: Partial<Event>): Promise<void>;
    deleteOpportunity(id: string): Promise<void>;
}
