"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_enum_1 = require("../../unfetter/stix.enum");
const category_mock_1 = require("./category.mock");
describe('category model', () => {
    let cut;
    beforeEach(() => {
        cut = category_mock_1.CategoryMockFactory.mockOne();
    });
    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });
    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.CATEGORY);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.CATEGORY);
    });
});
