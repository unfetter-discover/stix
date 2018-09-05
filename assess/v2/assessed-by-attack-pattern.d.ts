import { AssessmentObject } from './assessment-object';
/**
 * @description an assessment of a single type ie, indicator, mitigation, sensor
 */
export declare class AssessedByAttackPattern {
    assessedobjects: AssessmentObject<any>[];
    risk: number;
    _id: string;
}
