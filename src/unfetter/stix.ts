import { StixCore } from '../stix/stix-core';
import { MetaProps } from './meta-props';

/**
 * @description unfetter definition of stix
 */
export class Stix extends StixCore {
    public metaProperties: MetaProps;
}
