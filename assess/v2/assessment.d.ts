import { Stix } from '../../unfetter/stix';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessmentMeta } from './assessment-meta';
import { AssessmentObject } from './assessment-object';
/**
 * @description
 */
export declare class Assessment extends Stix {
    assessmentMeta: AssessmentMeta;
    assessment_objects: AssessmentObject<Stix>[];
    type: StixEnum;
}
