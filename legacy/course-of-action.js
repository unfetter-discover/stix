"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../stix/stix-core.enum");
var CourseOfAction = /** @class */ (function () {
    function CourseOfAction(data) {
        this.type = stix_core_enum_1.StixCoreEnum.COURSE_OF_ACTION;
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
        }
        else {
            this.attributes = this.createAttributes();
        }
    }
    CourseOfAction.prototype.createAttributes = function () {
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
    };
    return CourseOfAction;
}());
exports.CourseOfAction = CourseOfAction;
