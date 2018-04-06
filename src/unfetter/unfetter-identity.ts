import { Dictionary } from '../common/dictionary';
import { Identity } from '../stix/identity';
import { MetaProps } from './meta-props';
import { Stix } from './stix';
import { UnfetterStixProperties } from './unfetter-stix-properties';

/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export class UnfetterIdentity extends Identity implements UnfetterStixProperties {

    public metaProperties: MetaProps;
    public extendedProperties: Dictionary<string>;

    /**
     * @param data
     */
    constructor(data?: Stix) {
        super(data);
    }

}
