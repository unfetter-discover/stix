"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_enum_1 = require("../../../unfetter/stix.enum");
/**
 * @description assessment set represents many object assessments,
 *  ie answers to many capabilities vs attack attackpatterns
 * assessments set can represent state of an assessed infrastructure. ex. AsIs, ToBe, IfImplemented...
 */
var AssessmentSet = /** @class */ (function () {
    function AssessmentSet() {
        // created by ref is a identity id
        this.created = new Date().toISOString();
        this.type = stix_enum_1.StixEnum.ASSESSMENT_SET;
    }
    return AssessmentSet;
}());
exports.AssessmentSet = AssessmentSet;
