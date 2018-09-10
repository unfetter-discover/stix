import { StixCoreEnum } from '../stix/stix-core.enum';
import { ExternalReference } from './externalReference';
import { KillChainPhase } from './kill-chain-phase';
export declare class Tool {
    id: string;
    readonly type: StixCoreEnum;
    links: {
        self: string;
    };
    attributes: {
        version: string;
        created: Date;
        modified: Date;
        description: string;
        name: string;
        labels: string[];
        aliases: string[];
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        tool_version: string;
        created_by_ref: string;
    };
    constructor(data?: Tool);
    private createAttributes;
}
