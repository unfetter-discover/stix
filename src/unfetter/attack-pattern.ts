import { StixCoreEnum } from '../stix/stix-core.enum';
import { Stix } from './stix';

/**
 * @description attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export class AttackPattern extends Stix {

    /**
     * @param data
     */
    constructor(data?: Stix) {
        super(data);
        this.type = StixCoreEnum.ATTACK_PATTERN;
    }

}
