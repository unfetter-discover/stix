import { Dictionary } from '../common/dictionary';
import { StixCore } from '../stix/stix-core';
import { MetaProps } from './meta-props';
/**
 * @description unfetter definition of stix
 * @see {StixCore}
 * @see https://oasis-open.github.io/cti-documentation/
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 * @see https://stixproject.github.io/
 */
export declare class Stix extends StixCore {
    metaProperties: MetaProps;
    extendedProperties: Dictionary;
}
