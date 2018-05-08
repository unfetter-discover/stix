"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_enum_1 = require("../../../unfetter/stix.enum");
const capability_mock_1 = require("./capability.mock");
describe('capability model', () => {
    let cut;
    beforeEach(() => {
        cut = capability_mock_1.CapabilityMockFactory.mockOne();
    });
    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });
    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.CAPABILITY);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.CAPABILITY);
    });
});
