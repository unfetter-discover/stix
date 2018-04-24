"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const assess_attack_pattern_meta_mock_1 = require("./assess-attack-pattern-meta.mock");
const phase_1 = require("./phase");
class PhaseMock extends mock_1.Mock {
    mockOne() {
        const tmp = new phase_1.Phase();
        tmp._id = 'phase-' + this.genId();
        tmp.attackPatterns = assess_attack_pattern_meta_mock_1.AssessAttackPatternMetaMockFactory.mockMany(4);
        return tmp;
    }
}
exports.PhaseMock = PhaseMock;
exports.PhaseMockFactory = new PhaseMock();
