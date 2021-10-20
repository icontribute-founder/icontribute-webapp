import { assert } from "chai";

export const authTest = function () {
    const email = "testcompany@email.com";
    const password = "password";

    it("should login successfully", async function () {
        const userCredential =
            await this.authentication.loginWithEmailAndPassword(
                email,
                password
            );
        assert(userCredential.user);
    });
};
