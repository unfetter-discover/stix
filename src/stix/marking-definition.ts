import { StixCoreEnum } from './stix-core.enum';

export class MarkingDefinition {
    public definition_type: string;
    public definition = {} as { rating: number, label: string };
    public created: Date;
    public readonly type = StixCoreEnum.MARKING_DEFINITION;
    public id: string;
}
