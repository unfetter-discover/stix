import { StixCore } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

export class MarkingDefinition extends StixCore {
    public definition_type: string;
    public definition: any = {};

    constructor(data?: StixCore) {
        super(data);
        this.type = StixCoreEnum.MARKING_DEFINITION;
    }
}
