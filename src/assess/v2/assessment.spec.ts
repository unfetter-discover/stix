import { Assessment } from './assessment';
import { AssessmentMockFactory } from './assessment.mock';

describe('assessment model', () => {

    let cut: Assessment;

    beforeEach(() => {
        cut = AssessmentMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });

    it('should know have a name', () => {
        expect(cut.name).toBeDefined();
    });

    it('should have a copy constructor', () => {
        expect(cut.assessment_objects).toBeDefined();
        expect(cut.assessment_objects.length).toBeGreaterThan(1);
        expect(cut.name).toBeDefined();
        expect(cut.assessmentMeta).toBeDefined();

        const numAssessmentObjects = cut.assessment_objects.length;
        const name = cut.name;
        const copied = new Assessment(cut);
        // console.log(JSON.stringify(cut, undefined, '\t'));
        // console.log(JSON.stringify(copied, undefined, '\t'));
        expect(copied).toBeDefined();
        expect(copied.name).toEqual(name);
        expect(copied.assessment_objects).toBeDefined();
        expect(copied.assessment_objects.length).toEqual(numAssessmentObjects);
    });

});
