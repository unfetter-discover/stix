import { Stix } from '../../unfetter/stix';
import { AssessAttackPatternMeta } from './assess-attack-pattern-meta';
import { AssessmentObject } from './assessment-object';
/**
 * @description an assessment of a single type ie, indicator, mitigation, sensor
 */
export declare class Phase {
    assessedObjects: AssessmentObject<Stix>[];
    attackPatterns: AssessAttackPatternMeta[];
    _id: string;
    avgRisk?: number;
}
