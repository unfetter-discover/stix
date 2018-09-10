import { KillChainPhase } from './kill-chain-phase';
import { KillChain, StixExpanded } from './stix-core';
/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export declare class AttackPattern extends StixExpanded implements KillChain {
    kill_chain_phases?: KillChainPhase[];
    /**
     * @param data
     */
    constructor(data?: StixExpanded);
}
