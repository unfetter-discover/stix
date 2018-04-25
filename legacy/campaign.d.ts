import { StixCoreEnum } from '../stix/stix-core.enum';
export declare class Campaign {
    id: string;
    readonly type: StixCoreEnum;
    attributes: {
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
    constructor(data?: Campaign);
    formatDate(): void;
    private createAttributes();
}
