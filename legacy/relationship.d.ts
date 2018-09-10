import { ExternalReference } from './externalReference';
import { KillChainPhase } from './kill-chain-phase';
export declare class Relationship {
    id: string;
    type: string;
    attributes: {
        created: Date;
        modified: Date;
        version: string;
        labels: string[];
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        name: string;
        description: string;
        relationship_type: string;
        source_ref: string;
        target_ref: string;
        created_by_ref: string;
    };
    constructor(data?: any);
    private createAttributes;
}
