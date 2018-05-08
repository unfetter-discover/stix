"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_enum_1 = require("../../../stix/stix-core.enum");
const stix_enum_1 = require("../../../unfetter/stix.enum");
const object_assessment_mock_1 = require("./object-assessment.mock");
describe('object assessment model', () => {
    let cut;
    beforeEach(() => {
        cut = object_assessment_mock_1.ObjectAssessmentMockFactory.mockOne();
    });
    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });
    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.OBJECT_ASSESSMENT);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.OBJECT_ASSESSMENT);
    });
    it('should link to a capability', () => {
        expect(cut).toBeDefined();
        expect(cut.object_ref).toContain(stix_enum_1.StixEnum.CAPABILITY);
    });
    it('should have a created by ref', () => {
        expect(cut).toBeDefined();
        expect(cut.created_by_ref).toBeDefined();
        expect(cut.created_by_ref).toContain(stix_core_enum_1.StixCoreEnum.IDENTITY);
    });
    it('should contain assessed objects', () => {
        expect(cut).toBeDefined();
        expect(cut.assessments_objects).toBeDefined();
        expect(cut.assessments_objects.length).toBeGreaterThanOrEqual(2);
    });
});
