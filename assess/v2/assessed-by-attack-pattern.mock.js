"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const assessed_by_attack_pattern_1 = require("./assessed-by-attack-pattern");
/**
 * @description an assessment of a single type ie, indicator, mitigation, sensor
 */
class AssessedByAttackPatternMock extends mock_1.Mock {
    mockOne() {
        const tmp = new assessed_by_attack_pattern_1.AssessedByAttackPattern();
        tmp._id = this.genId();
        tmp.risk = Math.random() * 100;
        return tmp;
    }
}
exports.AssessedByAttackPatternMock = AssessedByAttackPatternMock;
exports.AssessedByAttackPatternMockFactory = new AssessedByAttackPatternMock();
