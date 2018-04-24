"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const assess_attack_pattern_meta_1 = require("./assess-attack-pattern-meta");
class AssessAttackPatternMetaMock extends mock_1.Mock {
    mockOne() {
        const meta = new assess_attack_pattern_meta_1.AssessAttackPatternMeta();
        meta.attackPatternName = 'attack-pattern name';
        meta.attackPatternId = 'attack-pattern-' + this.genId();
        return meta;
    }
}
exports.AssessAttackPatternMetaMock = AssessAttackPatternMetaMock;
exports.AssessAttackPatternMetaMockFactory = new AssessAttackPatternMetaMock();
