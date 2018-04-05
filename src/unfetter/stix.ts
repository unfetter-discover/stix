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
export class Stix extends StixCore {
    public metaProperties: MetaProps;
    public extendedProperties: Dictionary;
}
