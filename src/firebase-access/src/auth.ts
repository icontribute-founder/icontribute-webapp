import {
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

export class Authentication {
    private readonly auth: Auth;

    constructor(auth: Auth) {
        this.auth = auth;
    }

    static create(auth: Auth) {
        return new Authentication(auth);
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
