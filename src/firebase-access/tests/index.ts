import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { describe, before } from "mocha";
import { Authentication, OpportunityCollection, UserCollection } from "../dist";
import config from "../firebaseConfig.json";
import { authTest } from "./auth.test";
import { opportunityTest } from "./event.test";
import { userTest } from "./user.test";

describe("Firbase Wrapper Tests", function () {
    const app = initializeApp(config);
    const auth = getAuth();
    const db = getFirestore(app);

    const firebaseEmulatorConfig = {
        host: "localhost",
        firestorePort: 8080,
        authPort: 9099,
    };

    before(function (done) {
        const { host, firestorePort, authPort } = firebaseEmulatorConfig;

        this.authentication = Authentication.create(auth);
        this.opportunityCollection = OpportunityCollection.create(app, db);
        this.userCollection = UserCollection.create(app, db);

        connectFirestoreEmulator(db, host, firestorePort);
        connectAuthEmulator(auth, `http://${host}:${authPort}`, {
            disableWarnings: true,
        });

        done();
    });

    describe("Authentication", authTest.bind(this));
    describe("Opportunity CRUD", opportunityTest.bind(this));
    describe("User CRUD", userTest.bind(this));
});
