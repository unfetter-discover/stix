import { StixCoreEnum } from '../stix/stix-core.enum';
import { ExternalReference } from './externalReference';
import { KillChainPhase } from './kill-chain-phase';

export class Identity {
    public id: string;
    public readonly type = StixCoreEnum.IDENTITY;

    public attributes: {
        created: Date;
        modified: Date;
        version: string;
        labels: string[];
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        name: string;
        description: string;
        identity_class: string;
        sectors: string[];
        contact_information: string;
    };

    constructor(data?: Identity) {
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
        } else {
            this.attributes = this.createAttributes();
        }
    }

     private createAttributes(): any {
        return {
            // version: '',
            // created: new Date(),
            // modified: new Date(),
            labels: [],
            external_references: [],
            kill_chain_phases: [],
            // name: '',
            // description: '',
            // identity_class: '',
            sectors: [],
            // contact_information: ''
        };
    }
}
