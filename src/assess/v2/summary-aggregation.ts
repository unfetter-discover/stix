import { AssessAttackPattern } from './assess-attack-pattern';
import { AssessAttackPatternCount } from './assess-attack-pattern-count';

export class SummaryAggregation {
    public assessedAttackPatternCountBySophisicationLevel: AssessAttackPatternCount;
    public attackPatternsByAssessedObject: [{_id: string, attackPatterns: AssessAttackPattern[]}];
    public totalAttackPatternCountBySophisicationLevel: AssessAttackPatternCount;
}
