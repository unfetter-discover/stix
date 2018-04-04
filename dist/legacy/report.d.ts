import { ExternalReference, KillChainPhase } from '.';
import { StixCoreEnum } from '../stix/stix-core.enum';
export declare class Report {
    readonly type: StixCoreEnum;
    url: string;
    id: string;
    attributes: {
        version: string;
        created: any;
        modified: any;
        description: string;
        name: string;
        published: any;
        labels: string[];
        object_refs: string[];
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        type?: string;
        metaProperties?: any;
        id?: string;
        created_by_ref: string;
    };
    constructor();
}
