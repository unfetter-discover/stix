"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_enum_1 = require("../stix/stix-core.enum");
class CourseOfAction {
    constructor(data) {
        this.type = stix_core_enum_1.StixCoreEnum.COURSE_OF_ACTION;
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
        }
        else {
            this.attributes = this.createAttributes();
        }
    }
    createAttributes() {
        return {
            // version: '1',
            // created: new Date().toISOString(),
            //  modified: new Date().toISOString(),
            // name: '',
            // description: '',
            labels: [],
            external_references: [],
            kill_chain_phases: [],
        };
    }
}
exports.CourseOfAction = CourseOfAction;
