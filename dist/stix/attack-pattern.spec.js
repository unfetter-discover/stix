"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attack_pattern_mock_1 = require("./attack-pattern.mock");
const stix_core_enum_1 = require("./stix-core.enum");
/**
 * Stix attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
describe('attack pattern model', () => {
    let ap;
    beforeEach(() => {
        ap = attack_pattern_mock_1.AttackPatternMockFactory.mockOne();
    });
    it('should have a constructor', () => {
        expect(ap).toBeDefined();
        expect(ap.id).toBeDefined();
    });
    it('should be of type attack-pattern', () => {
        expect(ap.type).toBeDefined();
        expect(ap.type).toEqual(stix_core_enum_1.StixCoreEnum.ATTACK_PATTERN);
    });
});
