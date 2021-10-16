import { assert, expect } from "chai";
import { GeoPoint } from "firebase/firestore";
import { defaultEvent } from "../dist";

export const opportunityTest = function () {
    const companyId = "testcompany@email.com";
    const eventId = "utJSlNLCImWrkTuxFpGM";

    it("should get some opportunities", async function () {
        const opportunities =
            await this.opportunityCollection.getOpportunities();
        assert(opportunities.length > 0);
    });

    it("should get some opportunities", async function () {
        const opportunities =
            await this.opportunityCollection.getOpportunities();
        assert(opportunities.length > 0);
    });

    it("should get one opportunity by the given id", async function () {
        const opportunity = await this.opportunityCollection.getOpportunityById(
            eventId
        );
        expect(opportunity).to.not.be.null;
        if (opportunity !== null) {
            assert(opportunity.id === eventId);
        }
    });

    it("should create a new opportunity", async function () {
        const event = {
            ...defaultEvent,
            eventName: "Test event",
            description: "",
            companyName: "",
            email: "",
            coordinates: new GeoPoint(36.66002, 6.18195),
        };

        const res = await this.opportunityCollection.createOpportunity(
            companyId,
            event
        );
        assert(res);
    });

    it("should update an exisiting opportunity", async function () {
        await this.opportunityCollection.updateOpportunity(eventId, {
            companyName: "Test company name",
        });
    });

    it("should delete an exisiting opportunity", async function () {
        await this.opportunityCollection.deleteOpportunity(eventId);
    });
};
