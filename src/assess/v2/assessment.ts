import { Stix } from '../../unfetter/stix';
import { StixBundle } from '../../unfetter/stix-bundle';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessmentMeta } from './assessment-meta';
import { AssessmentObject } from './assessment-object';

/**
 * @description
 */
export class Assessment {
    public assessmentMeta = new AssessmentMeta();
    public assessment_objects = [] as AssessmentObject[];
    public create_by_ref?: string;
    public description: string;
    public id?: string;
    public modified: string;
    public name: string;
    public type = StixEnum.ASSESSMENT;
}
