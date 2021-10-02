import { assert } from "chai";
import { before } from "mocha";
import config from "../firebaseConfig.json";
import { Authentication } from "../dist";

describe("Authentication", function () {
    const auth = Authentication.create(config);
    const email = "testcompany@email.com";
    const password = "password";

    before((done) => {
        auth.connectAuthEmulator("localhost", 9099, { disableWarnings: true });
        done();
    });

    it("should login successfully", async () => {
        const userCredential = await auth.loginWithEmailAndPassword(
            email,
            password
        );
        assert(userCredential.user);
    });
});
