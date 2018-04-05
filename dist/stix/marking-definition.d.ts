import { StixCoreEnum } from './stix-core.enum';
export declare class MarkingDefinition {
    definition_type: string;
    definition: {
        rating: number;
        label: string;
    };
    created: Date;
    readonly type: StixCoreEnum;
    id: string;
}
