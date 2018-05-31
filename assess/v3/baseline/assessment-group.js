"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description assessment group contains references to several assessment sets
 * Useful to store state when doing comparisons across sets
 */
var AssessmentGroup = /** @class */ (function () {
    function AssessmentGroup() {
        this.created = new Date().toISOString();
    }
    return AssessmentGroup;
}());
exports.AssessmentGroup = AssessmentGroup;
