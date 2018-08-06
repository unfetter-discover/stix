import { StixCoreEnum } from './stix-core.enum';

export class MarkingDefinition {
    public definition_type: string;
    public definition: any = {};
    public created: Date;
    public readonly type = StixCoreEnum.MARKING_DEFINITION;
    public id: string;
}
