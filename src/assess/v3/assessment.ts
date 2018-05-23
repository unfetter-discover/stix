import { Stix } from '../../unfetter/stix';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessmentObject } from '../v2/assessment-object';
import { Assess3Meta } from './assess3-meta';
import { AssessmentEvalTypeEnum } from './assessment-eval-type.enum';

/**
 * @description An assessment represents subjective scoring;
 *  of mitigations, indicator, and capabilities in ones environment
 */
export class Assessment extends Stix {
    public assessmentMeta = new Assess3Meta();
    public assessment_objects = [] as AssessmentObject[];
    public type = StixEnum.ASSESSMENT;

    /**
     * @description inspects the first assessed object and determines
     *  this objects Assessment type
     * @see AssessmentEvalTypeEnum
     * @returns AssessmentEvalTypeEnum
     */
    public determineAssessmentType(): AssessmentEvalTypeEnum {
        if (!this.assessment_objects || this.assessment_objects.length === 0) {
            return AssessmentEvalTypeEnum.UNASSESSED;
        }

        const assessedObjects = this.assessment_objects || [];
        const firstObject = assessedObjects[0] || new AssessmentObject();
        if (!firstObject.stix) {
            return AssessmentEvalTypeEnum.UNASSESSED;
        }

        const assessedType = firstObject.stix.type;
        let retVal = AssessmentEvalTypeEnum.UNKNOWN_TYPE;
        switch (assessedType) {
            case 'course-of-action':
                retVal = AssessmentEvalTypeEnum.MITIGATIONS;
                break;
            case 'indicator':
                retVal = AssessmentEvalTypeEnum.INDICATORS;
                break;
            case 'x-unfetter-sensor':
                retVal = AssessmentEvalTypeEnum.SENSORS;
                break;
            case 'x-unfetter-object-assessment':
                retVal = AssessmentEvalTypeEnum.CAPABILITIES;
                break;
            default:
                retVal = AssessmentEvalTypeEnum.UNKNOWN_TYPE;
        }
        return retVal;
    }
}
