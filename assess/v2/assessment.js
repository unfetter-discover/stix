"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_1 = require("../../unfetter/stix");
const stix_enum_1 = require("../../unfetter/stix.enum");
const assessment_meta_1 = require("./assessment-meta");
/**
 * @description
 */
class Assessment extends stix_1.Stix {
    constructor() {
        super(...arguments);
        this.assessmentMeta = new assessment_meta_1.AssessmentMeta();
        this.assessment_objects = [];
        this.type = stix_enum_1.StixEnum.ASSESSMENT;
    }
}
exports.Assessment = Assessment;
