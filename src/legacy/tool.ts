import { ExternalReference, KillChainPhase } from '.';
import { StixCoreEnum } from '../stix/stix-core.enum';

export class Tool {
    public id: string;
    public readonly type = StixCoreEnum.TOOL;
    public links: {self: string};

    public attributes: {
        version: string;
        created: Date;
        modified: Date;
        description: string;
        name: string;
        labels: string[];
        aliases: string[];
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        tool_version: string;
        created_by_ref: string;
    };

    constructor(data?: Tool) {
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
        } else {
            this.attributes = this.createAttributes();
        }
    }

    private createAttributes(): any {
        return {
            // version: '1',
            // created: moment().format(Constance.DATE_FORMATE),
            // modified: moment().format(Constance.DATE_FORMATE),
            // description: '',
            name: '',
            aliases: [],
            labels: [],
            external_references: [],
            kill_chain_phases: [],
        };
    }
}
