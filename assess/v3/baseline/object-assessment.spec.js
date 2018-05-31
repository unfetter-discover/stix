"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../../../stix/stix-core.enum");
var stix_enum_1 = require("../../../unfetter/stix.enum");
var object_assessment_mock_1 = require("./object-assessment.mock");
describe('object assessment model', function () {
    var cut;
    beforeEach(function () {
        cut = object_assessment_mock_1.ObjectAssessmentMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(cut).toBeDefined();
    });
    it('should know its own type', function () {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.OBJECT_ASSESSMENT);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.OBJECT_ASSESSMENT);
    });
    it('should link to a capability', function () {
        expect(cut).toBeDefined();
        expect(cut.object_ref).toContain(stix_enum_1.StixEnum.CAPABILITY);
    });
    it('should have a created by ref', function () {
        expect(cut).toBeDefined();
        expect(cut.created_by_ref).toBeDefined();
        expect(cut.created_by_ref).toContain(stix_core_enum_1.StixCoreEnum.IDENTITY);
    });
    it('should contain assessed objects', function () {
        expect(cut).toBeDefined();
        expect(cut.assessments_objects).toBeDefined();
        expect(cut.assessments_objects.length).toBeGreaterThanOrEqual(2);
    });
});
