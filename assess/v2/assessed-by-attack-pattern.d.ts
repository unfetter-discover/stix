import { Stix } from '../../unfetter/stix';
import { AssessmentObject } from './assessment-object';
/**
 * @description an assessment of a single type ie, indicator, mitigation, sensor
 */
export declare class AssessedByAttackPattern {
    assessedobjects: AssessmentObject<Stix>[];
    risk: number;
    _id: string;
}
