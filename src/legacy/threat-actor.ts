import { ExternalReference, KillChainPhase } from '.';
import { StixCoreEnum } from '../stix/stix-core.enum';

export class ThreatActor {
    public id: string;
    public readonly type = StixCoreEnum.THREAT_ACTOR;

    public attributes: {
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
     constructor(data?: ThreatActor) {
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
            // description: '',
            labels: [],
            aliases: [],
            external_references: [],
            kill_chain_phases: [],
        };
    }
}
