"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_enum_1 = require("../../../unfetter/stix.enum");
var capability_mock_1 = require("./capability.mock");
describe('capability model', function () {
    var cut;
    beforeEach(function () {
        cut = capability_mock_1.CapabilityMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(cut).toBeDefined();
    });
    it('should know its own type', function () {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.CAPABILITY);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.CAPABILITY);
    });
});
