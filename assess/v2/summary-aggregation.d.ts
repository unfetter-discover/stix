import { AssessAttackPattern } from './assess-attack-pattern';
import { AssessAttackPatternCount } from './assess-attack-pattern-count';
export declare class SummaryAggregation {
    assessedAttackPatternCountBySophisicationLevel: AssessAttackPatternCount;
    attackPatternsByAssessedObject: [{
        _id: string;
        attackPatterns: AssessAttackPattern[];
    }];
    totalAttackPatternCountBySophisicationLevel: AssessAttackPatternCount;
}
