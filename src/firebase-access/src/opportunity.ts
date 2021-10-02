import { FirebaseOptions } from "@firebase/app-types";
import {
    getDoc,
    query,
    doc,
    where,
    getDocs,
    QueryConstraint,
    DocumentData,
    addDoc,
    arrayUnion,
    QueryDocumentSnapshot,
    updateDoc,
    connectFirestoreEmulator,
    EmulatorMockTokenOptions,
} from "firebase/firestore";
import { distanceBetween } from "geofire-common";
import ICFirebaseCollection from "./collection";
import { EventQuery, EventType, Event } from "./models";

/**
 *
 */
export class OpportunityCollection extends ICFirebaseCollection {
    /**
     *
     * @param options
     * @param name
     */
    constructor(options: FirebaseOptions, name?: string | undefined) {
        super(options, name);
    }

    /**
     *
     * @param options
     * @param name
     * @returns
     */
    static create(options: FirebaseOptions, name?: string | undefined) {
        return new OpportunityCollection(options, name);
    }

    /**
     *
     * @param host
     * @param port
     * @param options
     */
    public useEmulator(
        host: string,
        port: number,
        options?:
            | {
                  mockUserToken?: string | EmulatorMockTokenOptions | undefined;
              }
            | undefined
    ) {
        connectFirestoreEmulator(this.db, host, port, options);
    }

    private buildOpportunityQuery(eventQuery: EventQuery) {
        const { beginningDate, endDate, interests, eventType } = eventQuery;

        const compoundQueries: QueryConstraint[] = [];
        if (beginningDate && endDate) {
            compoundQueries.push(where("date", ">=", beginningDate));
            compoundQueries.push(where("date", "<=", endDate));
        }

        if (eventType) {
            compoundQueries.push(
                where("virtual", "==", eventType === EventType.VIRTUAL)
            );
        }

        if (interests && interests.length > 0) {
            compoundQueries.push(
                where("categories", "array-contains-any", interests)
            );
        }

        return compoundQueries;
    }

    /**
     *
     * @param eventQuery
     * @returns
     */
    public async getOpportunities(eventQuery?: EventQuery) {
        if (!eventQuery) {
            const snap = await getDocs(this.eventRef);
            return snap.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
        }

        const queries = this.buildOpportunityQuery(eventQuery);

        const snap = await getDocs(query(this.eventRef, ...queries));
        const { location, distance } = eventQuery;

        const matchingDocs: QueryDocumentSnapshot<DocumentData>[] = [];

        // filter by distance
        if (location && distance) {
            snap.forEach((doc) => {
                const coords = doc.get("coordinates");
                const actualDistance = distanceBetween(
                    [coords.latitude, coords.longitude],
                    [location.latitude, location.longitude]
                );
                if (actualDistance <= distance) {
                    matchingDocs.push(doc);
                }
            });
        }

        return matchingDocs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        });
    }

    /**
     *
     * @param id
     * @returns
     */
    public async getOpportunityById(id: string) {
        const docRef = doc(this.db, this.eventCollectionName, id);
        const snap = await getDoc(docRef);
        return { ...snap.data(), id: snap.id };
    }

    /**
     *
     * @param userId
     * @param event
     * @returns
     */
    public async createOpportunity(userId: string, event: Event) {
        // const { latitude, longitude } = event.coordinates;
        // const geohash = geohashForLocation([latitude, longitude]);
        const eventDocRef = await addDoc(this.eventRef, event);

        const userDocRef = doc(this.db, this.userCollectionName, userId);
        await updateDoc(userDocRef, {
            event: arrayUnion(eventDocRef.id),
        });

        return eventDocRef.id;
    }

    /**
     *
     * @param id
     * @param fields
     */
    public async updateOpportunity(id: string, fields: Partial<Event>) {
        const ref = doc(this.db, this.eventCollectionName, id);
        await updateDoc(ref, fields);
    }

    /**
     *
     * @param id
     */
    public async deleteOpportunity(id: string) {
        const fields = { deleted: true };
        await this.updateOpportunity(id, fields);
    }
}
