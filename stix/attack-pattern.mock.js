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
var mock_1 = require("../mock");
var attack_pattern_1 = require("./attack-pattern");
var stix_core_enum_1 = require("./stix-core.enum");
var AttackPatternMock = /** @class */ (function (_super) {
    __extends(AttackPatternMock, _super);
    function AttackPatternMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AttackPatternMock.prototype.mockOne = function () {
        var tmp = new attack_pattern_1.AttackPattern();
        tmp.id = stix_core_enum_1.StixCoreEnum.ATTACK_PATTERN + '--' + this.genId();
        tmp.name = 'passthehash';
        return tmp;
    };
    return AttackPatternMock;
}(mock_1.Mock));
exports.AttackPatternMock = AttackPatternMock;
exports.AttackPatternMockFactory = new AttackPatternMock();
