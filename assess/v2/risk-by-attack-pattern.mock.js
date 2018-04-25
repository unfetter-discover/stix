"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const assessed_by_attack_pattern_mock_1 = require("./assessed-by-attack-pattern.mock");
const phase_mock_1 = require("./phase.mock");
const risk_by_attack_1 = require("./risk-by-attack");
class RiskByAttackPatternMock extends mock_1.Mock {
    mockOne() {
        const tmp = new risk_by_attack_1.RiskByAttack();
        tmp.phases = phase_mock_1.PhaseMockFactory.mockMany(4);
        tmp.assessedByAttackPattern = assessed_by_attack_pattern_mock_1.AssessedByAttackPatternMockFactory.mockMany(4);
        return tmp;
    }
}
exports.RiskByAttackPatternMock = RiskByAttackPatternMock;
exports.RiskByAttackPatternMockFactory = new RiskByAttackPatternMock();
