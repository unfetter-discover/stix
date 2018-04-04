import { ExternalReference, KillChainPhase } from '.';
import { StixCoreEnum } from '../stix/stix-core.enum';

export class IntrusionSet {
    public id: string;
    public readonly type = StixCoreEnum.INTRUSION_SET;
    public attributes: {
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
        secondary_motivation: string[ ],
        objective: string;
        timestamp_precision: string;
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        created_by_ref: string;
    };

    constructor(data?: IntrusionSet) {
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
            this.formatDate();
        } else {
            this.attributes = this.createAttributes();
        }
    }

    public formatDate(): void {
       this.attributes.first_seen =  this.attributes.first_seen ?
           new Date(this.attributes.first_seen) : new Date();
       this.attributes.last_seen =  this.attributes.last_seen ?
           new Date(this.attributes.last_seen) : new Date();
    }

    private createAttributes(): any {
        return {
            // version: '',
            // created: moment().format(Constance.DATE_FORMATE),
            // modified: moment().format(Constance.DATE_FORMATE),
            // name: '',
            // description: '',
            first_seen: new Date(),
            last_seen: new Date(),
            goals: [],
            // resource_level: '',
            // primary_motivation: '',
            secondary_motivation: [ ],
            // objective: '',
            // timestamp_precision: '',
            labels: [],
            aliases: [],
            external_references: [],
            kill_chain_phases: [],
        };
    }
}
