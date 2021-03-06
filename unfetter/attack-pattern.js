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
var stix_1 = require("./stix");
/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
var AttackPattern = /** @class */ (function (_super) {
    __extends(AttackPattern, _super);
    /**
     * @param data
     */
    function AttackPattern(data) {
        var _this = _super.call(this, data) || this;
        _this.type = stix_core_enum_1.StixCoreEnum.ATTACK_PATTERN;
        return _this;
    }
    return AttackPattern;
}(stix_1.ExpandedStix));
exports.AttackPattern = AttackPattern;
