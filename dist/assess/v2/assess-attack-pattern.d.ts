import { ExternalReference } from '../../stix/external_reference';
import { KillChainPhase } from '../../stix/kill-chain-phase';
/**
 * @description an assessment of a single type ie, indicator, mitigation, sensor
 */
export declare class AssessAttackPattern {
    description?: string;
    external_references?: ExternalReference[] | undefined;
    id?: string;
    kill_chain_phases: KillChainPhase[];
    name?: string;
    x_unfetter_sophistication_level?: number;
    attackPatternId?: string;
}
