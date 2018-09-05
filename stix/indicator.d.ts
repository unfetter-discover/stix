import { KillChainPhase } from './kill-chain-phase';
import { KillChain, StixExpanded } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';
/**
 *
 */
export declare class Indicator extends StixExpanded<StixCoreEnum.INDICATOR> implements KillChain {
    kill_chain_phases?: KillChainPhase[];
    pattern: string;
    valid_from: Date | string;
    valid_until?: Date | string;
    /**
     *
     * @param data
     */
    constructor(data?: object);
}
