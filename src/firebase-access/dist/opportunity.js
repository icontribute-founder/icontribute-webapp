"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunityCollection = void 0;
var firestore_1 = require("firebase/firestore");
var geofire_common_1 = require("geofire-common");
var collection_1 = __importDefault(require("./collection"));
var models_1 = require("./models");
var OpportunityCollection = (function (_super) {
    __extends(OpportunityCollection, _super);
    function OpportunityCollection(options, name) {
        return _super.call(this, options, name) || this;
    }
    OpportunityCollection.create = function (options, name) {
        return new OpportunityCollection(options, name);
    };
    OpportunityCollection.prototype.buildOpportunityQuery = function (eventQuery) {
        var beginningDate = eventQuery.beginningDate, endDate = eventQuery.endDate, interests = eventQuery.interests, eventType = eventQuery.eventType;
        var compoundQueries = [];
        if (beginningDate && endDate) {
            compoundQueries.push(firestore_1.where("date", ">=", beginningDate));
            compoundQueries.push(firestore_1.where("date", "<=", endDate));
        }
        if (eventType) {
            compoundQueries.push(firestore_1.where("virtual", "==", eventType === models_1.EventType.VIRTUAL));
        }
        if (interests && interests.length > 0) {
            compoundQueries.push(firestore_1.where("categories", "array-contains-any", interests));
        }
        return compoundQueries;
    };
    OpportunityCollection.prototype.getOpportunities = function (eventQuery) {
        return __awaiter(this, void 0, void 0, function () {
            var snap_1, queries, snap, location, distance, matchingDocs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!eventQuery) return [3, 2];
                        return [4, firestore_1.getDocs(this.eventRef)];
                    case 1:
                        snap_1 = _a.sent();
                        return [2, snap_1.docs.map(function (doc) {
                                return __assign(__assign({}, doc.data()), { id: doc.id });
                            })];
                    case 2:
                        queries = this.buildOpportunityQuery(eventQuery);
                        return [4, firestore_1.getDocs(firestore_1.query.apply(void 0, __spreadArray([this.eventRef], queries)))];
                    case 3:
                        snap = _a.sent();
                        location = eventQuery.location, distance = eventQuery.distance;
                        matchingDocs = [];
                        if (location && distance) {
                            snap.forEach(function (doc) {
                                var coords = doc.get("coordinates");
                                var actualDistance = geofire_common_1.distanceBetween([coords.latitude, coords.longitude], [location.latitude, location.longitude]);
                                if (actualDistance <= distance) {
                                    matchingDocs.push(doc);
                                }
                            });
                        }
                        return [2, matchingDocs.map(function (doc) {
                                return __assign(__assign({}, doc.data()), { id: doc.id });
                            })];
                }
            });
        });
    };
    OpportunityCollection.prototype.getOpportunityById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var docRef, snap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        docRef = firestore_1.doc(this.db, this.eventCollectionName, id);
                        return [4, firestore_1.getDoc(docRef)];
                    case 1:
                        snap = _a.sent();
                        if (!snap.exists)
                            return [2, null];
                        return [2, __assign(__assign({}, snap.data()), { id: snap.id })];
                }
            });
        });
    };
    OpportunityCollection.prototype.createOpportunity = function (userId, event) {
        return __awaiter(this, void 0, void 0, function () {
            var eventDocRef, userDocRef;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, firestore_1.addDoc(this.eventRef, event)];
                    case 1:
                        eventDocRef = _a.sent();
                        userDocRef = firestore_1.doc(this.db, this.userCollectionName, userId);
                        return [4, firestore_1.updateDoc(userDocRef, {
                                event: firestore_1.arrayUnion(eventDocRef.id),
                            })];
                    case 2:
                        _a.sent();
                        return [2, eventDocRef.id];
                }
            });
        });
    };
    OpportunityCollection.prototype.updateOpportunity = function (id, fields) {
        return __awaiter(this, void 0, void 0, function () {
            var ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = firestore_1.doc(this.db, this.eventCollectionName, id);
                        return [4, firestore_1.updateDoc(ref, fields)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    OpportunityCollection.prototype.deleteOpportunity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var fields;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fields = { deleted: true };
                        return [4, this.updateOpportunity(id, fields)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return OpportunityCollection;
}(collection_1.default));
exports.OpportunityCollection = OpportunityCollection;
//# sourceMappingURL=opportunity.js.map