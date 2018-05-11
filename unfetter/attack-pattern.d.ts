import { Dictionary } from '../common/dictionary';
import { MetaProps } from './meta-props';
import { Stix } from './stix';
import { UnfetterStixProperties } from './unfetter-stix-properties';
/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export declare class AttackPattern extends Stix implements UnfetterStixProperties {
    metaProperties?: MetaProps;
    extendedProperties?: Dictionary<string>;
    /**
     * @param data
     */
    constructor(data?: Stix);
}
