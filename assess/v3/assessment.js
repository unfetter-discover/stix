"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_1 = require("../../unfetter/stix");
const stix_enum_1 = require("../../unfetter/stix.enum");
const assess3_meta_1 = require("./assess3-meta");
/**
 * @description
 */
class Assessment extends stix_1.Stix {
    constructor() {
        super(...arguments);
        this.assessmentMeta = new assess3_meta_1.Assess3Meta();
        this.assessment_objects = [];
        this.type = stix_enum_1.StixEnum.ASSESSMENT;
    }
}
exports.Assessment = Assessment;
