import { Mock } from '../mock';
import { GranularMarking } from '../stix/granular-marking';
import { StixCoreEnum } from '../stix/stix-core.enum';
import { AttackPattern } from './attack-pattern';
import { UnfetterIndicator } from './indicator';

export class UnfetterIndicatorMock extends Mock<UnfetterIndicator> {

    public mockOne(): UnfetterIndicator {
        const tmp = new UnfetterIndicator();
        const number = this.genNumber();
        tmp.id = this.genId(StixCoreEnum.INDICATOR);
        tmp.name = `SMB Copy and Transfer - ${number}`;
        tmp.description = `description ${number}`;
        tmp.object_refs = ['1', '2'];
        tmp.modified = new Date().toISOString();
        tmp.granular_markings = [new GranularMarking()];
        return tmp;
    }

}

export const UnfetterIndicatorMockFactory = new UnfetterIndicatorMock();
