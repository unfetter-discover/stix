"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description a capability could represent a product, ex. AntiVirus software
 */
class Capability {
    constructor() {
        this.created = new Date().toISOString();
    }
}
exports.Capability = Capability;
