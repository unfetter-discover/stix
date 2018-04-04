"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_1 = require("./stix");
/**
 * @description sometimes unfetter wraps stix
 */
class WrappedStix {
    constructor() {
        this.stix = new stix_1.Stix();
    }
}
exports.WrappedStix = WrappedStix;
