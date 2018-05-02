"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const stix_enum_1 = require("../../unfetter/stix.enum");
const assessment_set_mock_1 = require("./assessment-set.mock");
describe('assessment set model', () => {
    let cut;
    beforeEach(() => {
        cut = assessment_set_mock_1.AssessmentSetMockFactory.mockOne();
    });
    it('should have a constructor', () => {
        expect(cut).toBeDefined();
        expect(cut.name).toBeDefined();
    });
    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.ASSESSMENT_SET);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.ASSESSMENT_SET);
    });
    it('should have a created by ref', () => {
        expect(cut).toBeDefined();
        expect(cut.created_by_ref).toBeDefined();
        expect(cut.created_by_ref).toContain(__1.StixCoreEnum.IDENTITY);
    });
    it('should know if it is a baseline', () => {
        expect(cut).toBeDefined();
        expect(cut.is_baseline).toBeTruthy();
    });
    it('should contain assessed object ids', () => {
        expect(cut).toBeDefined();
        expect(cut.assessments).toBeDefined();
    });
});
