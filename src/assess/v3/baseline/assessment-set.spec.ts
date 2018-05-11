import { StixCoreEnum } from '../../../stix/stix-core.enum';
import { StixEnum } from '../../../unfetter/stix.enum';
import { AssessmentSet } from './assessment-set';
import { AssessmentSetMockFactory } from './assessment-set.mock';

describe('assessment set model', () => {

    let cut: AssessmentSet;

    beforeEach(() => {
        cut = AssessmentSetMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(cut).toBeDefined();
        expect(cut.name).toBeDefined();
    });

    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(StixEnum.ASSESSMENT_SET);
        expect(cut.type).toEqual(StixEnum.ASSESSMENT_SET);
    });

    it('should have a created by ref', () => {
        expect(cut).toBeDefined();
        expect(cut.created_by_ref).toBeDefined();
        expect(cut.created_by_ref).toContain(StixCoreEnum.IDENTITY);
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
