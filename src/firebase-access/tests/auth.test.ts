import { assert } from "chai";
import { before } from "mocha";
import config from "../firebaseConfig.json";
import { Authentication } from "../dist";

describe("Authentication", function () {
    let auth: Authentication;

    before((done) => {
        auth = Authentication.create(config);
        auth.useEmulator("localhost", 9099, { disableWarnings: true });
        done();
    });

    it("should login successfully", async () => {
        const userCredential = await auth.loginWithEmailAndPassword(
            "testcompany@email.com",
            "password"
        );
        assert(userCredential.user);
    });
});
