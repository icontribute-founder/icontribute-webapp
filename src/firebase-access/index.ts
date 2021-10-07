import { FirebaseOptions } from "@firebase/app-types";
import { FirebaseApp, initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    Auth,
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence,
    inMemoryPersistence,
    browserLocalPersistence,
    Persistence,
    signOut,
    onAuthStateChanged,
    NextOrObserver,
    User,
} from "firebase/auth";
import {
    getFirestore,
    collection,
    Firestore,
    getDoc,
    query,
    doc,
    where,
    getDocs,
    QueryConstraint,
    CollectionReference,
    DocumentData,
    addDoc,
} from "firebase/firestore";
import EventQuery from "./models/EventQuery";
import { Company, Student } from "./models/User";

export default class ICFirebase {
    private app: FirebaseApp;
    private auth: Auth;
    private db: Firestore;
    private userRef: CollectionReference<DocumentData>;
    private eventRef: CollectionReference<DocumentData>;

    constructor(options: FirebaseOptions, name?: string | undefined) {
        this.app = initializeApp(options, name);
        this.auth = getAuth();
        this.db = getFirestore(this.app);
        this.userRef = collection(this.db, "user");
        this.eventRef = collection(this.db, "events");
    }

    /**
     *
     * @param options
     * @param name
     * @returns
     */
    static create(options: FirebaseOptions, name?: string | undefined) {
        return new ICFirebase(options, name);
    }

    public isUserLogin(nextOrObserver: NextOrObserver<User>) {
        return onAuthStateChanged(this.auth, nextOrObserver);
    }

    /**
     *
     * @param email
     * @param password
     * @param persistanceType
     * @returns
     */
    public async signupWithEmailAndPassword(
        email: string,
        password: string,
        persistanceType: "local" | "session" | "memory" = "local"
    ) {
        let persist: Persistence;
        switch (persistanceType) {
            case "session":
                persist = browserSessionPersistence;
                break;
            case "memory":
                persist = inMemoryPersistence;
                break;
            default:
                persist = browserLocalPersistence;
                break;
        }

        await setPersistence(this.auth, persist);
        const userCredential = await createUserWithEmailAndPassword(
            this.auth,
            email,
            password
        );
        return userCredential;
    }

    /**
     *
     * @param email
     * @param password
     * @returns
     */
    public async loginWithEmailAndPassword(
        email: string,
        password: string,
        persistanceType?: any
    ) {
        const userCredential = await signInWithEmailAndPassword(
            this.auth,
            email,
            password
        );
        return userCredential;
    }

    public async logout() {
        return await signOut(this.auth);
    }

    /**
     *
     * @param email
     * @returns
     */
    public async getUser(email: string) {
        const user = await getDoc(doc(this.userRef, email));
        return user.data();
    }

    /**
     *
     * @param eventQuery
     * @returns
     */
    public async getEvents(eventQuery?: EventQuery) {
        const queries: QueryConstraint[] = [
            where("active", "==", true),
            where("eventID", "==", "y2uup90FKJ4G2QEGMMsH"),
        ];
        const q = query(this.eventRef, ...queries);
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map((doc) => doc.data());
    }

    /**
     *
     * @param student
     * @returns
     */
    public async createStudent(student: Student) {
        const docRef = await addDoc(this.userRef, student);
        return docRef.id;
    }

    /**
     *
     * @param company
     * @returns
     */
    public async createCompany(company: Company) {
        const docRef = await addDoc(this.userRef, company);
        return docRef.id;
    }

    /**
     *
     * @param event
     * @returns
     */
    public async createEvent(event: Event) {
        const docRef = await addDoc(this.eventRef, event);
        return docRef.id;
    }
}
