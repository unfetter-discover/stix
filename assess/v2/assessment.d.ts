import { ExpandedStix } from '../../unfetter/stix';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessmentMeta } from './assessment-meta';
import { AssessmentObject } from './assessment-object';
/**
 * @description
 */
export declare class Assessment extends ExpandedStix {
    assessmentMeta: AssessmentMeta;
    assessment_objects: AssessmentObject<any>[];
    type: StixEnum;
    constructor(data?: any);
}
