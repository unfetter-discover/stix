"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_enum_1 = require("../../unfetter/stix.enum");
/**
 * @description assessed object represents the three questions/answers to a single attack pattern
 */
class AssessedObject {
    constructor() {
        this.type = stix_enum_1.StixEnum.ASSESSED_OBJECT;
        this.questions = this.questions || [];
    }
}
exports.AssessedObject = AssessedObject;
