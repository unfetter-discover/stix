"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description assessment group contains references to several assessment sets
 * Useful to store state when doing comparisons across sets
 */
class AssessmentGroup {
    constructor() {
        this.created = new Date().toISOString();
    }
}
exports.AssessmentGroup = AssessmentGroup;
