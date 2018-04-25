import { StixCoreEnum } from '../stix/stix-core.enum';
import { ExternalReference } from './externalReference';
import { KillChainPhase } from './kill-chain-phase';
export declare class ThreatActor {
    id: string;
    readonly type: StixCoreEnum;
    attributes: {
        version: string;
        created: Date;
        modified: Date;
        description: string;
        labels: string[];
        aliases: string[];
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        name: string;
        created_by_ref: string;
    };
    constructor(data?: ThreatActor);
    private createAttributes();
}
