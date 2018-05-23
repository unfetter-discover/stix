import { CourseOfAction } from '../../stix/course-of-action';
import { Indicator } from '../../stix/indicator';
import { Report } from '../../stix/report';
import { AssessmentObjectMockFactory } from '../v2/assessment-object.mock';
import { Assessment } from './assessment';
import { AssessmentEvalTypeEnum } from './assessment-eval-type.enum';
import { AssessmentMockFactory } from './assessment.mock';
import { ObjectAssessment } from './baseline/object-assessment';

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

    it('should know its own type', () => {
        expect(cut.determineAssessmentType()).toBeDefined();
    });

    it('should know when it is unassessed', () => {
        cut.assessment_objects = [];
        expect(cut.determineAssessmentType()).toBeDefined();
        expect(cut.determineAssessmentType()).toEqual(AssessmentEvalTypeEnum.UNASSESSED);
    });

    it('should know when it is an indicator assessment', () => {
        const assessedObject = AssessmentObjectMockFactory.mockOne();
        assessedObject.stix = new Indicator();
        cut.assessment_objects = [assessedObject];
        expect(cut.determineAssessmentType()).toBeDefined();
        expect(cut.determineAssessmentType()).toEqual(AssessmentEvalTypeEnum.INDICATORS);
    });

    it('should know when it is a mitigation assessment', () => {
        const assessedObject = AssessmentObjectMockFactory.mockOne();
        assessedObject.stix = new CourseOfAction();
        cut.assessment_objects = [assessedObject];
        expect(cut.determineAssessmentType()).toBeDefined();
        expect(cut.determineAssessmentType()).toEqual(AssessmentEvalTypeEnum.MITIGATIONS);
    });

    it('should know when it is a capability assessment', () => {
        const assessedObject = AssessmentObjectMockFactory.mockOne();
        assessedObject.stix = new ObjectAssessment();
        cut.assessment_objects = [assessedObject];
        expect(cut.determineAssessmentType()).toBeDefined();
        expect(cut.determineAssessmentType()).toEqual(AssessmentEvalTypeEnum.CAPABILITIES);
    });

    it('should identity when it is an unknown assessment', () => {
        const assessedObject = AssessmentObjectMockFactory.mockOne();
        assessedObject.stix = new Report();
        cut.assessment_objects = [assessedObject];
        expect(cut.determineAssessmentType()).toBeDefined();
        expect(cut.determineAssessmentType()).toEqual(AssessmentEvalTypeEnum.UNKNOWN_TYPE);
    });
});
