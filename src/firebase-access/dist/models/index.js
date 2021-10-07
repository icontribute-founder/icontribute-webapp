"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultShift = exports.defaultEvent = exports.defaultCompany = exports.defaultStudent = void 0;
var firestore_1 = require("firebase/firestore");
var Event_1 = require("./Event");
var User_1 = require("./User");
__exportStar(require("./Event"), exports);
__exportStar(require("./EventQuery"), exports);
exports.defaultStudent = {
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
    savedEvents: [],
    school: "",
    notifications: [],
    numUnreadNotifications: 0,
    verified: false,
    backgroundPicture: "",
    profilePicture: "",
    type: User_1.UserType.STUDENT,
};
exports.defaultCompany = {
    email: "",
    postalCode: "",
    notifications: [],
    numUnreadNotifications: 0,
    verified: false,
    backgroundPicture: "",
    profilePicture: "",
    companyName: "",
    event: [],
    rating: 1,
    reviews: [],
    description: "",
    website: "",
    categories: [],
    type: User_1.UserType.COMPANY,
};
exports.defaultEvent = {
    eventID: "",
    eventName: "",
    eventImage: "",
    description: "",
    companyName: "",
    edited: false,
    email: "",
    url: "",
    shifts: [],
    categories: [],
    address: "",
    coordinates: new firestore_1.GeoPoint(0, 0),
    active: true,
    type: Event_1.HostingType.External,
    deadline: new Date(),
    date: new Date(),
    verified: false,
    role: "",
    requirements: "",
    notes: "",
    reviews: [],
    virtual: false,
    deleted: false,
};
var today = new Date();
var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
exports.defaultShift = {
    start: today,
    end: nextweek,
    limit: 0,
    recurring: false,
    active: true,
    fullDay: false,
    users: [],
    repeat: undefined,
    spotsFilled: 0,
};
//# sourceMappingURL=index.js.map