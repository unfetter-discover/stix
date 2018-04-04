import { ExternalReference, KillChainPhase } from '.';
import { StixCoreEnum } from '../stix/stix-core.enum';
export declare class IntrusionSet {
    id: string;
    readonly type: StixCoreEnum;
    attributes: {
        version: string;
        created: string;
        modified: string;
        description: string;
        name: string;
        labels: string[];
        aliases: string[];
        first_seen: any;
        last_seen: any;
        goals: string[];
        resource_level: string;
        primary_motivation: string;
        secondary_motivation: string[];
        objective: string;
        timestamp_precision: string;
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        created_by_ref: string;
    };
    constructor(data?: IntrusionSet);
    formatDate(): void;
    private createAttributes();
}
