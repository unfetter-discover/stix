import { Dictionary } from '../common/dictionary';
import { Identity } from '../stix/identity';
import { MetaProps } from './meta-props';
import { Stix } from './stix';
import { UnfetterStixProperties } from './unfetter-stix-properties';
/**
 * @description identity
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export declare class UnfetterIdentity extends Identity implements UnfetterStixProperties {
    metaProperties: MetaProps;
    extendedProperties: Dictionary<string>;
    /**
     * @param data
     */
    constructor(data?: Stix);
}
