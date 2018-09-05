import { StixCoreEnum } from '../stix/stix-core.enum';
import { ExternalReference } from './externalReference';
import { KillChainPhase } from './kill-chain-phase';
export declare class CourseOfAction {
    id: string;
    readonly type: StixCoreEnum;
    attributes: {
        version: string;
        created: string;
        modified: string;
        description: string;
        name: string;
        labels: string[];
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        created_by_ref: string;
    };
    constructor(data?: CourseOfAction);
    private createAttributes;
}
