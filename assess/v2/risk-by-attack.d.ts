import { AssessedByAttackPattern } from './assessed-by-attack-pattern';
import { PatternByKillChain } from './pattern-by-kill-chain';
import { Phase } from './phase';
/**
 * @description an assessment of a single type ie, indicator, mitigation, sensor
 */
export declare class RiskByAttack {
    assessedByAttackPattern: AssessedByAttackPattern[];
    attackPatternsByKillChain: PatternByKillChain[];
    phases: Phase[];
}
