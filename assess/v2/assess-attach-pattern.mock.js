"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const assess_attack_pattern_1 = require("./assess-attack-pattern");
class AssessAttackPatternMock extends mock_1.Mock {
    mockOne() {
        const tmp = new assess_attack_pattern_1.AssessAttackPattern();
        tmp.id = this.genId();
        tmp.attackPatternId = 'attack-pattern-' + this.genId();
        return tmp;
    }
}
exports.AssessAttackPatternMock = AssessAttackPatternMock;
exports.AssessAttackPatternMockFactory = new AssessAttackPatternMock();
