import { StixCoreEnum } from '../stix/stix-core.enum';
import { ExternalReference } from './externalReference';

export class ObservedData {
    public id: string;
    public readonly type = StixCoreEnum.MALWARE;
    public links: { self: string };

    public attributes: {
        version: string;
        created: Date;
        modified: Date;
        labels: string[];
        first_observed: string,
        last_observed: string,
        numbered_observed: 0,
        objects: {}
        external_references: ExternalReference[];
        created_by_ref: string;
    };

    constructor(data?: ObservedData) {
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
            first_observed: new Date().toISOString(),
            last_observed: new Date().toISOString(),
            labels: [],
            external_references: [],
        };
    }
}
