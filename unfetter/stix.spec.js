"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_mock_1 = require("./stix.mock");
/**
 * @see https://stixproject.github.io/
 */
describe('stix model', function () {
    var stix;
    beforeEach(function () {
        stix = stix_mock_1.StixMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(stix).toBeDefined();
    });
    it('should have an undefined type', function () {
        expect(stix.type).toBeUndefined();
    });
    it('should have extra attributes', function () {
        expect(stix.extendedProperties);
        expect(stix.metaProperties);
    });
    it('should generate json', function () {
        expect(stix.toJson()).toContain('stix--');
    });
});
