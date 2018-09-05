import { Mock } from '../mock';
import { GranularMarking } from '../stix/granular-marking';
import { StixCoreEnum } from '../stix/stix-core.enum';
import { AttackPattern } from './attack-pattern';

export class AttackPatternMock extends Mock<AttackPattern> {

    public mockOne(): AttackPattern {
        const tmp = new AttackPattern();
        const number = this.genNumber();
        tmp.id = this.genId(StixCoreEnum.ATTACK_PATTERN);
        tmp.name = `attack-pattern${number}`;
        tmp.description = `description-${number}`;
        tmp.modified = new Date().toISOString();
        tmp.granular_markings = [new GranularMarking()];
        return tmp;
    }

}

export const AttackPatternMockFactory = new AttackPatternMock();
