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
var stix_1 = require("./stix");
var stix_enum_1 = require("./stix.enum");
/**
 * @description unfetter data modal for the threat dashboard
 */
var ThreatBoard = /** @class */ (function (_super) {
    __extends(ThreatBoard, _super);
    function ThreatBoard(data) {
        var _this = _super.call(this) || this;
        Object.assign(_this, data);
        _this.type = stix_enum_1.StixEnum.THREAT_BOARD;
        return _this;
    }
    return ThreatBoard;
}(stix_1.ExpandedStix));
exports.ThreatBoard = ThreatBoard;
