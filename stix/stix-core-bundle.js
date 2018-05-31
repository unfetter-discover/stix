"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description bundle holding stix objects
 */
var StixCoreBundle = /** @class */ (function () {
    function StixCoreBundle(objects) {
        if (objects === void 0) { objects = []; }
        this.objects = objects;
        this.type = 'bundle';
        this.id = 'stix-archive-bundle';
        this.spec_version = '2.0';
    }
    /**
     * @description generate json from this object
     * @return {string}
     */
    StixCoreBundle.prototype.toJson = function (delim) {
        if (delim === void 0) { delim = '\t'; }
        return JSON.stringify(this, undefined, delim);
    };
    return StixCoreBundle;
}());
exports.StixCoreBundle = StixCoreBundle;
