import { AssessAttackPattern } from './assess-attack-pattern';
/**
 * @description an assessment of a single type ie, indicator, mitigation, sensor
 */
export declare class PatternByKillChain {
    attackPatterns: AssessAttackPattern[];
    _id: string;
}
