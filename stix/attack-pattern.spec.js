"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attack_pattern_mock_1 = require("./attack-pattern.mock");
var stix_core_enum_1 = require("./stix-core.enum");
/**
 * Stix attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
describe('attack pattern model', function () {
    var ap;
    beforeEach(function () {
        ap = attack_pattern_mock_1.AttackPatternMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(ap).toBeDefined();
        expect(ap.id).toBeDefined();
    });
    it('should be of type attack-pattern', function () {
        expect(ap.type).toBeDefined();
        expect(ap.type).toEqual(stix_core_enum_1.StixCoreEnum.ATTACK_PATTERN);
    });
});
