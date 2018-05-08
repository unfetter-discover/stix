import { Stix } from '../../unfetter/stix';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessmentObject } from '../v2/assessment-object';
import { Assess3Meta } from './assess3-meta';

/**
 * @description
 */
export class Assessment extends Stix {
    public assessmentMeta = new Assess3Meta();
    public assessment_objects = [] as AssessmentObject[];
    public type = StixEnum.ASSESSMENT;
}
