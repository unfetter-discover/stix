import { KillChainPhase } from './kill-chain-phase';
import { KillChain, StixExpanded } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

/**
 *
 */
export class Indicator extends StixExpanded<StixCoreEnum.INDICATOR> implements KillChain {
    public kill_chain_phases?: KillChainPhase[];
    public pattern: string;
    public valid_from: Date | string = new Date().toISOString();
    public valid_until?: Date | string;

    /**
     *
     * @param data
     */
    constructor(data?: object) {
        super(data);
        this.type = StixCoreEnum.INDICATOR;
    }

}
