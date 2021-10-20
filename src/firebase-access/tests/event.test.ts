import { assert, expect } from "chai";
import { GeoPoint } from "firebase/firestore";
import { defaultEvent } from "../dist";

<<<<<<< HEAD
describe("Opportunity", function () {
  const opportunityCollection = OpportunityCollection.create(config);
  const companyId = "pPn3FypudrthuNbop1wh";
  const eventId = "utJSlNLCImWrkTuxFpGM";

  before((done) => {
    opportunityCollection.connectFirestoreEmulator("localhost", 8080);
    done();
  });

  it("should get some opportunities", async () => {
    const opportunities = await opportunityCollection.getOpportunities();
    assert(opportunities.length > 0);
  });

  it("should get one opportunity by the given id", async () => {
    const opportunity = await opportunityCollection.getOpportunityById(eventId);
    expect(opportunity).to.not.be.null;
    if (opportunity !== null) {
      assert(opportunity.id === eventId);
    }
  });

  it("should create a new opportunity", async () => {
    const event = {
      ...defaultEvent,
      eventName: "Test event",
      description: "",
      companyName: "",
      email: "",
      coordinates: new GeoPoint(36.66002, 6.18195),
    };

    const res = await opportunityCollection.createOpportunity(companyId, event);
    assert(res);
  });

  it("should update an exisiting opportunity", async () => {
    await opportunityCollection.updateOpportunity(eventId, {
      companyName: "Test company name",
=======
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
>>>>>>> 0c7f13e5edf9049d45fcc68bd65191e02f191252
    });
  });

<<<<<<< HEAD
  it("should delete an exisiting opportunity", async () => {
    await opportunityCollection.deleteOpportunity(eventId);
  });
});
=======
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
>>>>>>> 0c7f13e5edf9049d45fcc68bd65191e02f191252
