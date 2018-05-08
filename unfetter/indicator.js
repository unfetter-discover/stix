"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indicator_1 = require("../stix/indicator");
const stix_core_enum_1 = require("../stix/stix-core.enum");
/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
class UnfetterIndicator extends indicator_1.Indicator {
    /**
     * @param data
     */
    constructor(data) {
        super(data);
        this.type = stix_core_enum_1.StixCoreEnum.ATTACK_PATTERN;
    }
}
exports.UnfetterIndicator = UnfetterIndicator;
