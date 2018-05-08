import { Dictionary } from '../common/dictionary';
import { Indicator } from '../stix/indicator';
import { MetaProps } from './meta-props';
import { UnfetterStixProperties } from './unfetter-stix-properties';
/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export declare class UnfetterIndicator extends Indicator implements UnfetterStixProperties {
    metaProperties: MetaProps;
    extendedProperties: Dictionary<string>;
    /**
     * @param data
     */
    constructor(data?: object);
}
