import { KillChainPhase } from './kill-chain-phase';
import { KillChain, StixCore } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

/**
 *
 */
export class Relationship extends StixCore<StixCoreEnum.RELATIONSHIP> {
    public description?: string;
    public relationship_type: string;
    public source_ref: string;
    public target_ref: string;

    /**
     *
     * @param data
     */
    constructor(data?: object) {
        super(data);
        this.type = StixCoreEnum.RELATIONSHIP;
    }

}
