"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description
 */
var AssessmentObject = /** @class */ (function () {
    function AssessmentObject(risk, questions, stix, assId) {
        if (risk === void 0) { risk = -1; }
        if (questions === void 0) { questions = []; }
        this.risk = risk;
        this.questions = questions;
        this.stix = stix;
        this.assId = assId;
    }
    return AssessmentObject;
}());
exports.AssessmentObject = AssessmentObject;
