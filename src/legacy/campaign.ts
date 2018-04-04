import { ExternalReference, KillChainPhase } from '.';
import { StixCoreEnum } from '../stix/stix-core.enum';

export class Campaign {
    public id: string;
    public readonly type = StixCoreEnum.CAMPAIGN;

    public attributes: {
        version: string;
        created: string;
        modified: string;
        description: string;
        name: string;
        labels: string[];
        first_seen: any;
        objective: string;
        timestamp_precision: string;
        created_by_ref: string;
    };
    constructor(data?: Campaign) {
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
            this.formatDate();
        } else {
            this.attributes = this.createAttributes();
        }
    }

    public formatDate(): void {
        this.attributes.first_seen = this.attributes.first_seen ?
            new Date(this.attributes.first_seen) : new Date();
    }

    private createAttributes(): any {
        return {
            labels: [],
            first_seen: new Date(),
        };
    }
}
