"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../../../stix/stix-core.enum");
var stix_enum_1 = require("../../../unfetter/stix.enum");
var assessment_set_mock_1 = require("./assessment-set.mock");
describe('assessment set model', function () {
    var cut;
    beforeEach(function () {
        cut = assessment_set_mock_1.AssessmentSetMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(cut).toBeDefined();
        expect(cut.name).toBeDefined();
    });
    it('should know its own type', function () {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.ASSESSMENT_SET);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.ASSESSMENT_SET);
    });
    it('should have a created by ref', function () {
        expect(cut).toBeDefined();
        expect(cut.created_by_ref).toBeDefined();
        expect(cut.created_by_ref).toContain(stix_core_enum_1.StixCoreEnum.IDENTITY);
    });
    it('should know if it is a baseline', function () {
        expect(cut).toBeDefined();
        expect(cut.is_baseline).toBeTruthy();
    });
    it('should contain assessed object ids', function () {
        expect(cut).toBeDefined();
        expect(cut.assessments).toBeDefined();
    });
});
