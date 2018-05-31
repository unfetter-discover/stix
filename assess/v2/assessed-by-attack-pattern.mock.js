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
var mock_1 = require("../../mock");
var assessed_by_attack_pattern_1 = require("./assessed-by-attack-pattern");
/**
 * @description an assessment of a single type ie, indicator, mitigation, sensor
 */
var AssessedByAttackPatternMock = /** @class */ (function (_super) {
    __extends(AssessedByAttackPatternMock, _super);
    function AssessedByAttackPatternMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssessedByAttackPatternMock.prototype.mockOne = function () {
        var tmp = new assessed_by_attack_pattern_1.AssessedByAttackPattern();
        tmp._id = this.genId();
        tmp.risk = Math.random() * 100;
        return tmp;
    };
    return AssessedByAttackPatternMock;
}(mock_1.Mock));
exports.AssessedByAttackPatternMock = AssessedByAttackPatternMock;
exports.AssessedByAttackPatternMockFactory = new AssessedByAttackPatternMock();
