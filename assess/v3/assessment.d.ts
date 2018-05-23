import { Stix } from '../../unfetter/stix';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessmentObject } from '../v2/assessment-object';
import { Assess3Meta } from './assess3-meta';
import { AssessmentEvalTypeEnum } from './assessment-eval-type.enum';
/**
 * @description An assessment represents subjective scoring;
 *  of mitigations, indicator, and capabilities in ones environment
 */
export declare class Assessment extends Stix {
    assessmentMeta: Assess3Meta;
    assessment_objects: AssessmentObject<Stix>[];
    type: StixEnum;
    constructor(data?: any);
    /**
     * @description inspects the first assessed object and determines
     *  this objects Assessment type
     * @see AssessmentEvalTypeEnum
     * @returns AssessmentEvalTypeEnum
     */
    determineAssessmentType(): AssessmentEvalTypeEnum;
}
