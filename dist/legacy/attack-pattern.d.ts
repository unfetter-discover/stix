import { StixCoreEnum } from '../stix/stix-core.enum';
import { ExternalReference } from './externalReference';
import { KillChainPhase } from './kill-chain-phase';
export declare class AttackPattern {
    id: string;
    readonly type: StixCoreEnum;
    links: {
        self: string;
    };
    x_unfetter_sophistication_level: number;
    description: string;
    attributes: {
        version: string;
        created: Date;
        modified: Date;
        description: string;
        name: string;
        labels: string[];
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        x_unfetter_sophistication_level: number;
        created_by_ref: string;
    };
    constructor(data?: AttackPattern);
    private createAttributes();
}
