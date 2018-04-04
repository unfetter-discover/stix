import { ExternalReference, KillChainPhase } from '.';
import { StixCoreEnum } from '../stix/stix-core.enum';

export class AttackPattern {
    public id: string;
    public readonly type = StixCoreEnum.ATTACK_PATTERN;
    public links: {self: string};
    public x_unfetter_sophistication_level: number;
    public description: string;

    public attributes: {
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

    constructor(data?: AttackPattern) {
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
            name: '',
            labels: [],
            external_references: [],
            kill_chain_phases: [],
            // x_unfetter_sophistication_level: -1
        };
    }
}
