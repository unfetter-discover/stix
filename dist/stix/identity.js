"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_enum_1 = require("../stix/stix-core.enum");
const stix_core_1 = require("./stix-core");
/**
 * @description identity
 *
 * @see https://docs.google.com/document/d/1IvkLxg_tCnICsatu2lyxKmWmh1gY2h8HUNssKIE-UIA/edit#
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
class Identity extends stix_core_1.StixCore {
    /**
     * @param data
     */
    constructor(data) {
        super(data);
        this.type = stix_core_enum_1.StixCoreEnum.IDENTITY;
    }
}
exports.Identity = Identity;
