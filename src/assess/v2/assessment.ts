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

    constructor(data?: any) {
        super(data);
        if (data) {
            this.assessmentMeta = data.assessmentMeta || this.assessmentMeta;
            this.assessment_objects = data.assessment_objects || this.assessment_objects;
        }
    }

}
