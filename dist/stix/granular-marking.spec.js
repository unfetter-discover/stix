"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const granular_marking_mock_1 = require("./granular-marking.mock");
const stix_core_enum_1 = require("./stix-core.enum");
describe('granular markings stix model', () => {
    let stix;
    beforeEach(() => {
        stix = granular_marking_mock_1.GranularMarkingMockFactory.mockOne();
    });
    it('should have a constructor', () => {
        expect(stix).toBeDefined();
    });
    it('should know have a version', () => {
        expect(stix).toBeDefined();
    });
    it('should know its own type', () => {
        expect(stix).toBeDefined();
        expect(stix.marking_ref.startsWith(stix_core_enum_1.StixCoreEnum.MARKING_DEFINITION)).toBeTruthy();
    });
});
