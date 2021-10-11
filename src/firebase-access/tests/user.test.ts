import { assert } from "chai";
import {
    Company,
    defaultCompany,
    defaultStudent,
    OrganizationCategory,
    Student,
} from "../dist";

export const userTest = function () {
    const companyEmail = "testcompany@email.com";
    const studentEmail = "teststudent@email.com";

    it("should get the company by email", async function () {
        const company = await this.userCollection.getCompany(companyEmail);
        assert(company);
    });

    it("should get the student by email", async function () {
        const student = await this.userCollection.getStudent(studentEmail);
        assert(student);
    });

    it("should create a new company", async function () {
        const company: Company = {
            ...defaultCompany,
            email: "testcompanytmp@email.com",
            postalCode: "85719",
            description: "This is the description of the company",
            categories: [OrganizationCategory.Sports],
        };
        const email = await this.userCollection.createCompany(company);
        assert.strictEqual(email, "testcompanytmp@email.com");
    });

    it("should create a new student", async function () {
        const student: Student = {
            ...defaultStudent,
            email: "teststudenttmp@email.com",
            postalCode: "85719",
        };
        const email = await this.userCollection.createStudent(student);
        assert.strictEqual(email, "teststudenttmp@email.com");
    });

    it("should update an existing student", async function () {
        await this.userCollection.updateStudent({
            email: studentEmail,
            firstName: "Jimmy",
            lastName: "Doe",
        });
    });

    it("should update an existing company", async function () {
        await this.userCollection.updateStudent({
            email: companyEmail,
            companyName: "Jimmy's Company",
        });
    });
};
