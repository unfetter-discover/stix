import { StixCore } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

/**
 * @description
 */
export class Report extends StixCore {

    /**
     * @param data
     */
    constructor(data?: StixCore) {
        super(data);
        this.type = StixCoreEnum.REPORT;
    }

}
