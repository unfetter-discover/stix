"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_1 = require("./stix-core");
const stix_core_enum_1 = require("./stix-core.enum");
/**
 * @description
 */
class Report extends stix_core_1.StixCore {
    /**
     * @param data
     */
    constructor(data) {
        super(data);
        this.type = stix_core_enum_1.StixCoreEnum.REPORT;
    }
}
exports.Report = Report;
