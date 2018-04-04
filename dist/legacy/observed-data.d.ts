import { ExternalReference } from '.';
import { StixCoreEnum } from '../stix/stix-core.enum';
export declare class ObservedData {
    id: string;
    readonly type: StixCoreEnum;
    links: {
        self: string;
    };
    attributes: {
        version: string;
        created: Date;
        modified: Date;
        labels: string[];
        first_observed: string;
        last_observed: string;
        numbered_observed: 0;
        objects: {};
        external_references: ExternalReference[];
        created_by_ref: string;
    };
    constructor(data?: ObservedData);
    private createAttributes();
}
