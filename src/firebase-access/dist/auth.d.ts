import { FirebaseOptions } from "@firebase/app";
import { NextOrObserver, User } from "firebase/auth";
export declare class Authentication {
    private readonly auth;
    constructor(options: FirebaseOptions, name?: string | undefined);
    static create(options: FirebaseOptions, name?: string | undefined): Authentication;
    connectAuthEmulator(host: string, port: number, options?: {
        disableWarnings: boolean;
    } | undefined): void;
    isUserLogin(nextOrObserver: NextOrObserver<User>): import("firebase/auth").Unsubscribe;
    signupWithEmailAndPassword(email: string, password: string, persistanceType?: "local" | "session" | "memory"): Promise<import("@firebase/auth").UserCredential>;
    loginWithEmailAndPassword(email: string, password: string): Promise<import("@firebase/auth").UserCredential>;
    logout(): Promise<void>;
}
