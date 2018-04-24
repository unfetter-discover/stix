"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../mock");
const attack_pattern_1 = require("./attack-pattern");
const stix_core_enum_1 = require("./stix-core.enum");
class AttackPatternMock extends mock_1.Mock {
    mockOne() {
        const tmp = new attack_pattern_1.AttackPattern();
        tmp.id = stix_core_enum_1.StixCoreEnum.ATTACK_PATTERN + '--' + this.genId();
        tmp.name = 'passthehash';
        return tmp;
    }
}
exports.AttackPatternMock = AttackPatternMock;
exports.AttackPatternMockFactory = new AttackPatternMock();
