import { FirebaseOptions } from "@firebase/app-types";
import { FirebaseApp, initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    Firestore,
    CollectionReference,
    DocumentData,
    connectFirestoreEmulator,
    EmulatorMockTokenOptions,
} from "firebase/firestore";

class ICFirestoreCollection {
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

    /**
     *
     * @param host
     * @param port
     * @param options
     */
    public connectFirestoreEmulator(
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
}

export default ICFirestoreCollection;
