"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_enum_1 = require("../../../unfetter/stix.enum");
/**
 * @description assessed object represents the three questions/answers to a single attack pattern
 */
var AssessedObject = /** @class */ (function () {
    function AssessedObject() {
        this.type = stix_enum_1.StixEnum.ASSESSED_OBJECT;
        this.questions = this.questions || [];
    }
    return AssessedObject;
}());
exports.AssessedObject = AssessedObject;
