"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description bundle holding stix objects
 */
class StixCoreBundle {
    constructor(objects = []) {
        this.objects = objects;
        this.type = 'bundle';
        this.id = 'stix-archive-bundle';
        this.spec_version = '2.0';
    }
    /**
     * @description generate json from this object
     * @return {string}
     */
    toJson(delim = '\t') {
        return JSON.stringify(this, undefined, delim);
    }
}
exports.StixCoreBundle = StixCoreBundle;
