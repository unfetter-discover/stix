import { StixExpanded } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

/**
 * @description
 */
export class Report extends StixExpanded {
    public object_refs?: string[];
    /**
     * @param data
     */
    constructor(data?: any) {
        super(data);
        this.type = StixCoreEnum.REPORT;
    }

}
