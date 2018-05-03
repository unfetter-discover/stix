import { ObjectAssessment, StixCoreEnum } from '../..';
import { StixEnum } from '../../unfetter/stix.enum';
import { ObjectAssessmentMockFactory } from './object-assessment.mock';

describe('object assessment model', () => {

    let cut: ObjectAssessment;

    beforeEach(() => {
        cut = ObjectAssessmentMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });

    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(StixEnum.OBJECT_ASSESSMENT);
        expect(cut.type).toEqual(StixEnum.OBJECT_ASSESSMENT);
    });

    it('should link to a capability', () => {
        expect(cut).toBeDefined();
        expect(cut.object_ref).toContain(StixEnum.CAPABILITY);
    });

    it('should have a created by ref', () => {
        expect(cut).toBeDefined();
        expect(cut.created_by_ref).toBeDefined();
        expect(cut.created_by_ref).toContain(StixCoreEnum.IDENTITY);
    });

    it('should contain assessed objects', () => {
        expect(cut).toBeDefined();
        expect(cut.assessments_objects).toBeDefined();
        expect(cut.assessments_objects.length).toBeGreaterThanOrEqual(2);
    });

});
