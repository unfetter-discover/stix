import { StixCoreEnum } from '../stix/stix-core.enum';
import { ExternalReference } from './externalReference';
import { KillChainPhase } from './kill-chain-phase';

export class CourseOfAction {
    public id: string;
    public readonly type = StixCoreEnum.COURSE_OF_ACTION;

    public attributes: {
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
    constructor(data?: CourseOfAction) {
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
            // created: new Date().toISOString(),
            //  modified: new Date().toISOString(),

            // name: '',
            // description: '',
            labels: [],
            external_references: [],
            kill_chain_phases: [],
        };
    }
}
