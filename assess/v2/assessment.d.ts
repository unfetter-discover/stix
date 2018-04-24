import { Stix } from '../../unfetter/stix';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessmentMeta } from './assessment-meta';
import { AssessmentObject } from './assessment-object';
/**
 * @description
 */
export declare class Assessment {
    assessmentMeta: AssessmentMeta;
    assessment_objects: AssessmentObject<Stix>[];
    create_by_ref?: string;
    description: string;
    id?: string;
    modified: string;
    name: string;
    type: StixEnum;
}
