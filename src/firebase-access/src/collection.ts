import { FirebaseOptions } from "@firebase/app-types";
import { FirebaseApp, initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    Firestore,
    CollectionReference,
    DocumentData,
    addDoc,
} from "firebase/firestore";
import { Company } from "./models/User";

abstract class ICFirebaseCollection {
    protected readonly app: FirebaseApp;
    protected readonly db: Firestore;
    protected readonly userCollectionName: string;
    protected readonly eventCollectionName: string;
    protected readonly userRef: CollectionReference<DocumentData>;
    protected readonly eventRef: CollectionReference<DocumentData>;

    constructor(options: FirebaseOptions, name?: string | undefined) {
        this.app = initializeApp(options, name);
        this.db = !this.app ? getFirestore() : getFirestore(this.app);

        this.userCollectionName = "user";
        this.eventCollectionName = "events";
        this.userRef = collection(this.db, "user");
        this.eventRef = collection(this.db, this.eventCollectionName);
    }

    public abstract useEmulator(
        host: string,
        port: number,
        options?: any
    ): void;

    public async createCompany(company: Company) {
        const companyDocRef = await addDoc(this.userRef, company);
        return companyDocRef.id;
    }
}

export default ICFirebaseCollection;
