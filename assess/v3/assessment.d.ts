import { Stix } from '../../unfetter/stix';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessmentObject } from '../v2/assessment-object';
import { Assess3Meta } from './assess3-meta';
/**
 * @description
 */
export declare class Assessment extends Stix {
    assessmentMeta: Assess3Meta;
    assessment_objects: AssessmentObject<Stix>[];
    type: StixEnum;
}
