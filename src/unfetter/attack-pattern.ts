import { Dictionary } from '../common/dictionary';
import { StixCoreEnum } from '../stix/stix-core.enum';
import { MetaProps } from './meta-props';
import { ExpandedStix } from './stix';
import { UnfetterStixProperties } from './unfetter-stix-properties';

/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export class AttackPattern extends ExpandedStix implements UnfetterStixProperties {
    public metaProperties?: MetaProps;
    public extendedProperties?: Dictionary<string>;

    /**
     * @param data
     */
    constructor(data?: ExpandedStix) {
        super(data);
        this.type = StixCoreEnum.ATTACK_PATTERN;
    }

}
