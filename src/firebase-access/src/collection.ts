import { FirebaseApp } from "firebase/app";
import {
    collection,
    Firestore,
    CollectionReference,
    DocumentData,
} from "firebase/firestore";

class ICFirestoreCollection {
    protected readonly app: FirebaseApp;
    protected readonly db: Firestore;
    protected readonly userCollectionName: string;
    protected readonly eventCollectionName: string;
    protected readonly userRef: CollectionReference<DocumentData>;
    protected readonly eventRef: CollectionReference<DocumentData>;

    constructor(app: FirebaseApp, db: Firestore) {
        this.app = app;
        this.db = db;
        this.userCollectionName = "user";
        this.eventCollectionName = "events";
        this.userRef = collection(this.db, this.userCollectionName);
        this.eventRef = collection(this.db, this.eventCollectionName);
    }
}

export default ICFirestoreCollection;
