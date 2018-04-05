"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_enum_1 = require("../../unfetter/stix.enum");
/**
 * @description a capability could represent a product, ex. AntiVirus software
 */
class Capability {
    constructor() {
        this.created = new Date().toISOString();
        this.type = stix_enum_1.StixEnum.CAPABILITY;
    }
}
exports.Capability = Capability;
