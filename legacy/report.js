"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../stix/stix-core.enum");
var Report = /** @class */ (function () {
    function Report() {
        this.type = stix_core_enum_1.StixCoreEnum.REPORT;
        this.attributes = {
            version: '',
            created: new Date(),
            modified: new Date(),
            name: '',
            description: '',
            published: new Date(),
            object_refs: [],
            labels: [],
            external_references: [],
            kill_chain_phases: [],
            created_by_ref: '',
        };
    }
    return Report;
}());
exports.Report = Report;
