"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("../stix/identity");
/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
class UnfetterIdentity extends identity_1.Identity {
    /**
     * @param data
     */
    constructor(data) {
        super(data);
    }
}
exports.UnfetterIdentity = UnfetterIdentity;
