import { StixCoreEnum } from '../stix/stix-core.enum';
import { ExternalReference } from './externalReference';
import { KillChainPhase } from './kill-chain-phase';

export class Report {
    public readonly type = StixCoreEnum.REPORT;
    public url: string;
    public id: string;

    public attributes: {
        version: string;
        created: any;
        modified: any;
        description: string;
        name: string;
        published: any;
        labels: string[];
        object_refs: string[]
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];

        type?: string;
        metaProperties?: any;
        id?: string;
        created_by_ref: string;
    };

     constructor() {
        this.attributes = {
            version: '',
            created: new Date(),
            modified: new Date(),
            name: '',
            description: '',
            published: new Date(),
            object_refs:  [],
            labels: [],
            external_references: [],
            kill_chain_phases: [],
            created_by_ref: '',
        };
    }
}
