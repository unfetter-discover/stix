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
var stix_core_enum_1 = require("../stix/stix-core.enum");
var stix_core_1 = require("./stix-core");
/**
 * @description identity
 *
 * @see https://docs.google.com/document/d/1IvkLxg_tCnICsatu2lyxKmWmh1gY2h8HUNssKIE-UIA/edit#
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
var Identity = /** @class */ (function (_super) {
    __extends(Identity, _super);
    /**
     * @param data
     */
    function Identity(data) {
        var _this = _super.call(this, data) || this;
        _this.type = stix_core_enum_1.StixCoreEnum.IDENTITY;
        return _this;
    }
    return Identity;
}(stix_core_1.StixCore));
exports.Identity = Identity;
