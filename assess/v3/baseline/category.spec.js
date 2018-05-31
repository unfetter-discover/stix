"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_enum_1 = require("../../../unfetter/stix.enum");
var category_mock_1 = require("./category.mock");
describe('category model', function () {
    var cut;
    beforeEach(function () {
        cut = category_mock_1.CategoryMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(cut).toBeDefined();
    });
    it('should know its own type', function () {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.CATEGORY);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.CATEGORY);
    });
});
