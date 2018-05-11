import { Stix } from '../../unfetter/stix';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessmentMeta } from './assessment-meta';
import { AssessmentObject } from './assessment-object';

/**
 * @description
 */
export class Assessment extends Stix {
    public assessmentMeta = new AssessmentMeta();
    public assessment_objects = [] as AssessmentObject[];
    public type = StixEnum.ASSESSMENT;
}
