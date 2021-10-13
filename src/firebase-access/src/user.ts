import {
    arrayRemove,
    arrayUnion,
    doc,
    Firestore,
    getDoc,
    increment,
    runTransaction,
    setDoc,
    updateDoc,
} from "firebase/firestore";
import { FirebaseApp } from "../node_modules/firebase/app/dist/app";
import ICFirestoreCollection from "./collection";
import { Company, Student, Notification } from "./models";

/**
 * A class to perform CRUD opperations for User Collection on Firestore.
 *
 * Example:
 *
 * ```typescript
 * const config = { apiKey: ..., authDomain: ..., ...};
 * const app = initializeApp(config);
 * const db = getFirestore(app);
 * const userCollection = UserCollection.create(app, db);
 * const companyEmail = await userCollection.createCompany(company);
 * ```
 */
export class UserCollection extends ICFirestoreCollection {
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
     * A static method to create a new `UserCollection` instance. The instance can be used to CRUD opportunities.
     *
     * @param app The app instance returned by [initializeApp()](https://firebase.google.com/docs/reference/js/app#initializeapp)
     * @param db The firestore instance returned by [getFirestore()](https://firebase.google.com/docs/reference/js/firestore_.md#getfirestore)
     * @returns A `UserCollection` instance
     *
     * See [Firebase Documentation](https://firebase.google.com/docs/guides) for more information.
     *
     * Example:
     *
     * ```typescript
     * const config = { apiKey: ..., authDomain: ..., ...};
     * const app = initializeApp(config);
     * const db = getFirestore(app);
     * const userCollection = UserCollection.create(app, db);
     * const companyEmail = await userCollection.createCompany(company);
     * ```
     *
     */
    static create(app: FirebaseApp, db: Firestore) {
        return new UserCollection(app, db);
    }

    private async createUser(user: Company | Student) {
        await setDoc(doc(this.db, this.userCollectionName, user.email), user);
        return user.email;
    }

    /**
     * Create a new company, see {@link Company} for company fields
     *
     * @param company The new company to be created
     * @returns The email used for created the company
     *
     * Example:
     *
     * ```typescript
     * const company: Student = defaultCompany;
     * const companyEmail = await userCollection.createCompany(company);
     * ```
     */
    public async createCompany(company: Company) {
        return this.createUser(company);
    }

    /**
     * Create a new student, see {@link Student} for student fields
     *
     * @param student The new student to be created
     * @returns The email used for created the student
     *
     * Example:
     *
     * ```typescript
     * const student: Student = defaultStudent;
     * const studentEmail = await userCollection.createStudent(student);
     * ```
     */
    public async createStudent(student: Student) {
        return this.createUser(student);
    }

    private async getUser(email: string) {
        const docRef = doc(this.db, this.userCollectionName, email);
        const snap = await getDoc(docRef);
        if (!snap.exists) return null;
        return { ...snap.data() };
    }

    /**
     * Get an exisitng student based on given student id.
     *
     * @param email The email of the student (it's the id of the student)
     * @returns A student as {@link Student} if it's found; otherwise, it returns `null`
     *
     * Example:
     *
     * ```typescript
     * const email = "student@email.com";
     * const student = await userCollection.getStudent(email);
     * const { firstName, lastName } = student;
     * ```
     */
    public async getStudent(email: string) {
        return this.getUser(email);
    }

    /**
     * Get an exisitng company based on given company id.
     *
     * @param email The email of the company (it's the id of the company)
     * @returns A company as {@link Company} if it's found; otherwise, it returns `null`
     *
     * Example:
     *
     * ```typescript
     * const email = "company@email.com";
     * const company = await userCollection.getCompany(email);
     * const { companyName } = company;
     * ```
     */
    public async getCompany(email: string) {
        return this.getUser(email);
    }

    /**
     * Update an existing company, the company is identified as company's email.
     *
     * @param fields The fields with new values, it is a subset of {@link Company} interface, `email` field is required
     *
     * Example:
     *
     * ```typescript
     * const fields = { email: "company@email.com", companyName: "Jimmy's Company" };
     * await userCollection.updateCompany(fields);
     * ```
     */
    public async updateCompany(fields: Partial<Company> & { email: string }) {
        const ref = doc(this.db, this.userCollectionName, fields.email);
        await updateDoc(ref, fields);
    }

    /**
     * Update an existing student, the student is identified as student's email.
     *
     * @param fields The fields with new values, it is a subset of {@link Student} interface, `email` field is required
     *
     * Example:
     *
     * ```typescript
     * const fields = { email: "student@email.com", firstName: "Jimmy" };
     * await userCollection.updateStudent(fields);
     * ```
     */
    public async updateStudent(fields: Partial<Student> & { email: string }) {
        const ref = doc(this.db, this.userCollectionName, fields.email);
        await updateDoc(ref, fields);
    }

    /**
     *
     * @param email
     * @param notification
     */
    public async markNotificationRead(
        email: string,
        notification: Notification
    ) {
        const ref = doc(this.db, this.userCollectionName, email);
        await runTransaction(this.db, async (transaction) => {
            const userDoc = await transaction.get(ref);
            if (!userDoc.exists()) throw "User doc does not exist";

            let notifications = userDoc.data().notifications;

            notifications.forEach((elem: any) => {
                const { date, eventID, sourceEmail } = notification;
                if (
                    elem.date.toDate().getTime() === date.getTime() &&
                    elem.eventID === eventID &&
                    elem.sourceEmail === sourceEmail
                ) {
                    elem.read = true;
                }
            });
            transaction.update(ref, {
                notifications,
                numUnreadNotifications: increment(-1),
            });
        });
    }

    /**
     *
     * @param email
     * @param notification
     */
    public async createNotification(email: string, notification: Notification) {
        const ref = doc(this.db, this.userCollectionName, email);
        await updateDoc(ref, {
            notifications: arrayUnion(notification),
            numUnreadNotifications: increment(1),
        });
    }

    // public async deleteNotification() {}

    /**
     *
     * @param email
     * @param eventId
     */
    public async saveOpportunity(email: string, eventId: string) {
        const ref = doc(this.db, this.userCollectionName, email);
        await updateDoc(ref, {
            savedEvents: arrayUnion(eventId),
        });
    }

    /**
     *
     * @param email
     * @param eventId
     */
    public async unsaveOpportunity(email: string, eventId: string) {
        const ref = doc(this.db, this.userCollectionName, email);
        await updateDoc(ref, {
            savedEvents: arrayRemove(eventId),
        });
    }
}
