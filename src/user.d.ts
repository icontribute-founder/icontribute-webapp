import { Firestore } from "firebase/firestore";
import { FirebaseStorage } from "firebase/storage";
import { FirebaseApp } from "../node_modules/firebase/app/dist/app";
import ICFirestoreCollection from "./collection";
import { Company, Student, Notification } from "./models";
export declare class UserCollection extends ICFirestoreCollection {
    constructor(app: FirebaseApp, db: Firestore, storage: FirebaseStorage);
    static create(app: FirebaseApp, db: Firestore, storage: FirebaseStorage): UserCollection;
    private createUser;
    createCompany(company: Company): Promise<string>;
    createStudent(student: Student): Promise<string>;
    private getUser;
    getStudent(email: string): Promise<{
        [x: string]: any;
    } | null>;
    getCompany(email: string): Promise<{
        [x: string]: any;
    } | null>;
    private updateUser;
    updateCompany(fields: Partial<Company> & {
        email: string;
    }): Promise<void>;
    updateStudent(fields: Partial<Student> & {
        email: string;
    }): Promise<void>;
    markNotificationRead(email: string, notification: Notification): Promise<void>;
    createNotification(email: string, notification: Notification): Promise<void>;
    saveOpportunity(email: string, eventId: string): Promise<void>;
    unsaveOpportunity(email: string, eventId: string): Promise<void>;
}