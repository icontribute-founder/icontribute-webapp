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
    Firestore,
} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { distanceBetween } from "geofire-common";
import ICFirestoreCollection from "./collection";
import { EventQuery, EventType, Event } from "./models";

/**
 * A class to perform CRUD opperations for Event/Opportunity Collection on Firestore.
 *
 * **Note:** {@link connectFirestoreEmulator} is inherited for developing and testing purposes.
 * DO NOT call {@link connectFirestoreEmulator} in production.
 *
 * Example:
 *
 * ```typescript
 * const config = { apiKey: ..., authDomain: ..., ...};
 * const opportunityCollection = OpportunityCollection.create(config);
 * const allOpportunites = await opportunityCollection.getOpportunities();
 * ```
 */
export class OpportunityCollection extends ICFirestoreCollection {
    /**
     *
     * @param app The app instance returned by [initializeApp()](https://firebase.google.com/docs/reference/js/app#initializeapp)
     * @param db The firestore instance returned by [getFirestore()](https://firebase.google.com/docs/reference/js/firestore_.md#getfirestore)
     *
     * See [Firebase Documentation](https://firebase.google.com/docs/guides) for more information.
     */
    constructor(app: FirebaseApp, db: Firestore) {
        super(app, db);
    }

    /**
     * A static method to create a new `OpportunityCollection` instance. The instance can be used to CRUD opportunities.
     *
     * @param app The app instance returned by [initializeApp()](https://firebase.google.com/docs/reference/js/app#initializeapp)
     * @param db The firestore instance returned by [getFirestore()](https://firebase.google.com/docs/reference/js/firestore_.md#getfirestore)
     * @returns A `OpportunityCollection` instance
     *
     * See [Firebase Documentation](https://firebase.google.com/docs/guides) for more information.
     *
     * Example:
     *
     * ```typescript
     * const config = { apiKey: ..., authDomain: ..., ...};
     * const app = initializeApp(config);
     * const db = getFirestore(app);
     * const opportunityCollection = OpportunityCollection.create(app, db);
     * const allOpportunites = await opportunityCollection.getOpportunities();
     * ```
     *
     */
    static create(app: FirebaseApp, db: Firestore) {
        return new OpportunityCollection(app, db);
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
     * Get opportunites based on the given {@link EventQuery}.
     *
     * @param eventQuery The filter and sort type used for fetching opportunities
     * @returns An array of opportunities after the filter as {@link Event} with `id` for the event
     *
     * Example:
     *
     * ```typescript
     * const eventQuery: EventQuery = defaultEventQuery;
     * const queriedOpportunites = await opportunityCollection.getOpportunities(eventQuery);
     * const allOpportunites = await opportunityCollection.getOpportunities();
     * allOpportunites.forEach((opportunity) => console.log(opportunity));
     * ```
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
     * Get an exisitng opportunity based on given document id (generated by the Firestore).
     *
     * @param id The document id for identifying the opportunity
     * @returns An opportunity as {@link Event} with `id` if it's found; otherwise, it returns `null`
     *
     * Example:
     *
     * ```typescript
     * const id = "utJSlNLCImWrkTuxFpGM";
     * const opportunity = await opportunityCollection.getOpportunityById(id);
     * const { id, eventName } = opportunity;
     * ```
     */
    public async getOpportunityById(id: string) {
        const docRef = doc(this.db, this.eventCollectionName, id);
        const snap = await getDoc(docRef);
        if (!snap.exists) return null;
        return { ...snap.data(), id: snap.id };
    }

    /**
     * The company user create a new opportunity. This requires the company has been created before creating
     * the opportunity.
     *
     * @param userId The Firestore's document id of the company user
     * @param event The new event/opportunity the user is creating
     * @returns The document id for the new opportunity
     *
     * Example:
     *
     * ```typescript
     * const companyId = "pPn3FypudrthuNbop1wh";
     * const event: Event = defaultEvent;
     * const opportunityId = await opportunityCollection.createOpportunity(companyId, event);
     * ```
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
     * Update an existing opportunity, the opportunity is identified as Firestore's document id.
     *
     * @param id The Firestore's document id of the event to be updated
     * @param fields The fields with new values, it is a subset of {@link Event} interface
     *
     * Example:
     *
     * ```typescript
     * const id = "utJSlNLCImWrkTuxFpGM";
     * const fields = { eventName: "A new event name" };
     * await opportunityCollection.updateOpportunity(id, fields);
     * ```
     */
    public async updateOpportunity(id: string, fields: Partial<Event>) {
        const ref = doc(this.db, this.eventCollectionName, id);
        await updateDoc(ref, fields);
    }

    /**
     * Delete an existing opportunity. The opportunity is not actually deleted from the firestore
     * but its `deleted` field is set to `true`.
     *
     * @param id The Firestore's document id of the event to be deleted
     *
     * Example:
     *
     * ```typescript
     * const id = "utJSlNLCImWrkTuxFpGM";
     * await opportunityCollection.deleteOpportunity(id);
     * ```
     */
    public async deleteOpportunity(id: string) {
        const fields = { deleted: true };
        await this.updateOpportunity(id, fields);
    }
}
