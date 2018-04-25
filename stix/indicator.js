"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_1 = require("./stix-core");
const stix_core_enum_1 = require("./stix-core.enum");
/**
 *
 */
class Indicator extends stix_core_1.StixCore {
    /**
     *
     * @param data
     */
    constructor(data) {
        super(data);
        this.type = stix_core_enum_1.StixCoreEnum.INDICATOR;
    }
}
exports.Indicator = Indicator;
