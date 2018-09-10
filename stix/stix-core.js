"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function StixCore(data) {
        this.created = new Date().toISOString();
        Object.assign(this, data);
    }
    /**
     * @description generate json from this object
     * @return {string}
     */
    StixCore.prototype.toJson = function (delim) {
        if (delim === void 0) { delim = '\t'; }
        return JSON.stringify(this, null, delim);
    };
    return StixCore;
}());
exports.StixCore = StixCore;
/**
 * @description Most, but not all STIX classes, have name and description properties
 */
var StixExpanded = /** @class */ (function (_super) {
    __extends(StixExpanded, _super);
    function StixExpanded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StixExpanded;
}(StixCore));
exports.StixExpanded = StixExpanded;
