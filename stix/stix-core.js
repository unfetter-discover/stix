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
var StixCore = /** @class */ (function () {
    // TODO: determine if revoked belongs in this base class
    function StixCore(data) {
        this.created = new Date().toISOString();
        this.valid_from = new Date().toISOString();
        this.version = 2.0;
        Object.assign(this, data);
    }
    /**
     * @description generate json from this object
     * @return {string}
     */
    StixCore.prototype.toJson = function (delim) {
        if (delim === void 0) { delim = '\t'; }
        return JSON.stringify(this, undefined, delim);
    };
    return StixCore;
}());
exports.StixCore = StixCore;
