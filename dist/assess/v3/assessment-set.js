"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description assessment set represents many object assessments, ie answers to many capabilities vs attack attackpatterns
 * assessments set can represent state of an assessed infrastructure. ex. AsIs, ToBe, IfImplemented...
 */
class AssessmentSet {
    constructor() {
        this.created = new Date().toISOString();
    }
}
exports.AssessmentSet = AssessmentSet;
