import { AssessmentObject } from './assessment-object';
import { Stix } from '../../unfetter/stix';

/**
 * @description an assessment of a single type ie, indicator, mitigation, sensor
 */
export class AssessedByAttackPattern {
    public assessedobjects = [] as AssessmentObject[];
    public risk: number;
    public _id: string;
}
