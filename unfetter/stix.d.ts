import { Dictionary } from '../common/dictionary';
import { StixCore } from '../stix/stix-core';
import { MetaProps } from './meta-props';
import { UnfetterStixProperties } from './unfetter-stix-properties';
/**
 * @description unfetter definition of stix
 * @see {StixCore}
 * @see https://oasis-open.github.io/cti-documentation/
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 * @see https://stixproject.github.io/
 */
export declare class Stix extends StixCore implements UnfetterStixProperties {
    metaProperties?: MetaProps;
    extendedProperties?: Dictionary;
    x_unfetter_sophistication_level?: string;
}
