import { FirebaseOptions } from "@firebase/app";
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
    connectAuthEmulator,
} from "firebase/auth";
import ICFirebaseCollection from "./collection";

export class Authentication extends ICFirebaseCollection {
    private readonly auth: Auth;

    constructor(options: FirebaseOptions, name?: string | undefined) {
        super(options, name);
        this.auth = getAuth();
    }

    static create(options: FirebaseOptions, name?: string | undefined) {
        return new Authentication(options, name);
    }

    public useEmulator(
        host: string,
        port: number,
        options?:
            | {
                  disableWarnings: boolean;
              }
            | undefined
    ) {
        connectAuthEmulator(this.auth, `http://${host}:${port}`, options);
    }

    public isUserLogin(nextOrObserver: NextOrObserver<User>) {
        return onAuthStateChanged(this.auth, nextOrObserver);
    }

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

    public async loginWithEmailAndPassword(email: string, password: string) {
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
}
