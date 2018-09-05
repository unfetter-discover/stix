"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var granular_marking_mock_1 = require("./granular-marking.mock");
var stix_core_enum_1 = require("./stix-core.enum");
describe('granular markings stix model', function () {
    var stix;
    beforeEach(function () {
        stix = granular_marking_mock_1.GranularMarkingMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(stix).toBeDefined();
    });
    it('should know its own type', function () {
        expect(stix).toBeDefined();
        expect(stix.marking_ref.startsWith(stix_core_enum_1.StixCoreEnum.MARKING_DEFINITION)).toBeTruthy();
    });
});
