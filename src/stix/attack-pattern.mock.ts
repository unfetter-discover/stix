import { Mock } from '../mock';
import { AttackPattern } from './attack-pattern';
import { StixCoreEnum } from './stix-core.enum';

export class AttackPatternMock extends Mock<AttackPattern> {
    public mockOne(): AttackPattern {
        const tmp = new AttackPattern();
        tmp.id = StixCoreEnum.ATTACK_PATTERN + '--' + this.genId();
        tmp.name = 'passthehash';
        return tmp;
    }
}
export const AttackPatternMockFactory = new AttackPatternMock();
