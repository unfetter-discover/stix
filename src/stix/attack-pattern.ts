import { StixCore } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export class AttackPattern extends StixCore {

    /**
     * @param data
     */
    constructor(data?: StixCore) {
        super(data);
        this.type = StixCoreEnum.ATTACK_PATTERN;
    }

}
