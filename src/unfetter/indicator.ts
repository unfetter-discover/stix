import { Dictionary } from '../common/dictionary';
import { Indicator } from '../stix/indicator';
import { StixCoreEnum } from '../stix/stix-core.enum';
import { MetaProps } from './meta-props';
import { UnfetterStixProperties } from './unfetter-stix-properties';

/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export class UnfetterIndicator extends Indicator implements UnfetterStixProperties {
    public metaProperties?: MetaProps;
    public extendedProperties?: Dictionary<string>;

    /**
     * @param data
     */
    constructor(data?: object) {
        super(data);
        this.type = StixCoreEnum.INDICATOR;
    }

}
