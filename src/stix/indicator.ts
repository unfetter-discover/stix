import { StixCore } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

/**
 *
 */
export class Indicator extends StixCore {
    public pattern_lang: string;
    public pattern: string;
    public valid_until: string;

    /**
     *
     * @param data
     */
    constructor(data?: object) {
        super(data);
        this.type = StixCoreEnum.INDICATOR;
    }

}
