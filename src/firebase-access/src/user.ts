import { doc, Firestore, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { FirebaseApp } from "../node_modules/firebase/app/dist/app";
import ICFirestoreCollection from "./collection";
import { Company, Student } from "./models";

export class UserCollection extends ICFirestoreCollection {
    constructor(app: FirebaseApp, db: Firestore) {
        super(app, db);
    }

    static create(app: FirebaseApp, db: Firestore) {
        return new UserCollection(app, db);
    }

    private async createUser(user: Company | Student) {
        await setDoc(doc(this.db, this.userCollectionName, user.email), user);
        return user.email;
    }

    public async createCompany(company: Company) {
        return this.createUser(company);
    }

    public async createStudent(student: Student) {
        return this.createUser(student);
    }

    private async getUser(email: string) {
        const docRef = doc(this.db, this.userCollectionName, email);
        const snap = await getDoc(docRef);
        if (!snap.exists) return null;
        return { ...snap.data() };
    }

    public async getStudent(email: string) {
        return this.getUser(email);
    }

    public async getCompany(email: string) {
        return this.getUser(email);
    }

    public async updateCompany(fields: Partial<Company> & { email: string }) {
        const ref = doc(this.db, this.userCollectionName, fields.email);
        await updateDoc(ref, fields);
    }

    public async updateStudent(fields: Partial<Student> & { email: string }) {
        const ref = doc(this.db, this.userCollectionName, fields.email);
        await updateDoc(ref, fields);
    }
}
