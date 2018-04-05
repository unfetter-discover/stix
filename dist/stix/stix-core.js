"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description base stix 2.0 object
 * @see https://stixproject.github.io/
 * @see https://oasis-open.github.io/cti-documentation/
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 *
 * This references unfetter stix code and create a circular dependency,
 *  but one cannot extend a typescript string enum class
 */
class StixCore {
    constructor(data) {
        this.version = '2.0';
        this.valid_from = new Date().toISOString();
        this.created = new Date().toISOString();
        Object.assign(this, data);
    }
    /**
     * @description generate json from this object
     * @return {string}
     */
    toJson(delim = '\t') {
        return JSON.stringify(this, undefined, delim);
    }
}
exports.StixCore = StixCore;
