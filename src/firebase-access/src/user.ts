import { FirebaseOptions } from "@firebase/app-types";
import { addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import ICFirestoreCollection from "./collection";
import { Company, Student } from "./models";

export class UserCollection extends ICFirestoreCollection {
    constructor(options: FirebaseOptions, name?: string | undefined) {
        super(options, name);
    }

    static create(options: FirebaseOptions, name?: string | undefined) {
        return new UserCollection(options, name);
    }

    public async createCompany(company: Company) {
        const companyDocRef = await addDoc(this.userRef, company);
        return companyDocRef.id;
    }

    public async createStudent(student: Student) {
        const studentDocRef = await addDoc(this.userRef, student);
        return studentDocRef.id;
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
