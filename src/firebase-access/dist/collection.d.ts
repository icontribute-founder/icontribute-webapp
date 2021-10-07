import { FirebaseOptions } from "@firebase/app-types";
import { FirebaseApp } from "firebase/app";
import { Firestore, CollectionReference, DocumentData, EmulatorMockTokenOptions } from "firebase/firestore";
import { Company } from "./models/User";
declare class ICFirestoreCollection {
    protected readonly app: FirebaseApp;
    protected readonly db: Firestore;
    protected readonly userCollectionName: string;
    protected readonly eventCollectionName: string;
    protected readonly userRef: CollectionReference<DocumentData>;
    protected readonly eventRef: CollectionReference<DocumentData>;
    constructor(options: FirebaseOptions, name?: string | undefined);
    connectFirestoreEmulator(host: string, port: number, options?: {
        mockUserToken?: string | EmulatorMockTokenOptions | undefined;
    } | undefined): void;
    createCompany(company: Company): Promise<string>;
}
export default ICFirestoreCollection;
