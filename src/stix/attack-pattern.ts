import { KillChainPhase } from './kill-chain-phase';
import { KillChain, StixExpanded } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export class AttackPattern extends StixExpanded implements KillChain {
    public kill_chain_phases?: KillChainPhase[];

    /**
     * @param data
     */
    constructor(data?: any) {
        super(data);
        this.type = StixCoreEnum.ATTACK_PATTERN;
    }

}
