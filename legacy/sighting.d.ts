import { StixCoreEnum } from '../stix/stix-core.enum';
import { ExternalReference } from './externalReference';
export declare class Sighting {
    readonly type: StixCoreEnum;
    id: number;
    attributes: {
        version: string;
        created: string;
        modified: string;
        external_references: ExternalReference[];
        first_seen: any;
        firstseen_precision: string;
        last_seen: any;
        lastseen_precision: string;
        count: 0;
        sighting_of_ref: string;
        observed_data_refs: [string];
        where_sighted_refs: [string];
        summary: boolean;
        created_by_ref: string;
    };
    constructor(data?: Sighting);
    formatDate(): void;
    private createAttributes;
}
