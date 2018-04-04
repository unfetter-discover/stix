import { ExternalReference, KillChainPhase } from '.';
import { StixCoreEnum } from '../stix/stix-core.enum';
export declare class Indicator {
    id: string;
    readonly type: StixCoreEnum;
    attributes: {
        created: string;
        modified: string;
        version: string;
        labels: string[];
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        name: string;
        description: string;
        pattern_lang: string;
        pattern: string;
        valid_from: any;
        valid_until: any;
        metaProperties: {
            observedData: any[];
        };
        created_by_ref: string;
    };
    constructor(data?: Indicator);
    formatDate(): void;
    private createAttributes();
}
