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
var assessed_by_attack_pattern_mock_1 = require("./assessed-by-attack-pattern.mock");
var phase_mock_1 = require("./phase.mock");
var risk_by_attack_1 = require("./risk-by-attack");
var RiskByAttackPatternMock = /** @class */ (function (_super) {
    __extends(RiskByAttackPatternMock, _super);
    function RiskByAttackPatternMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RiskByAttackPatternMock.prototype.mockOne = function () {
        var tmp = new risk_by_attack_1.RiskByAttack();
        tmp.phases = phase_mock_1.PhaseMockFactory.mockMany(4);
        tmp.assessedByAttackPattern = assessed_by_attack_pattern_mock_1.AssessedByAttackPatternMockFactory.mockMany(4);
        return tmp;
    };
    return RiskByAttackPatternMock;
}(mock_1.Mock));
exports.RiskByAttackPatternMock = RiskByAttackPatternMock;
exports.RiskByAttackPatternMockFactory = new RiskByAttackPatternMock();
