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
var stix_core_1 = require("./stix-core");
var stix_core_enum_1 = require("./stix-core.enum");
/**
 *
 */
var Indicator = /** @class */ (function (_super) {
    __extends(Indicator, _super);
    /**
     *
     * @param data
     */
    function Indicator(data) {
        var _this = _super.call(this, data) || this;
        _this.valid_from = new Date().toISOString();
        _this.type = stix_core_enum_1.StixCoreEnum.INDICATOR;
        return _this;
    }
    return Indicator;
}(stix_core_1.StixExpanded));
exports.Indicator = Indicator;
