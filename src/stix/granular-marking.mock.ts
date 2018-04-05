import { Mock } from '../mock';
import { GranularMarking } from './granular-marking';
import { StixCoreEnum } from './stix-core.enum';

export class GranularMarkingMock extends Mock<GranularMarking> {
    public mockOne(): GranularMarking {
        const tmp = new GranularMarking();
        tmp.marking_ref = StixCoreEnum.MARKING_DEFINITION + '--' + this.genId();
        tmp.selectors = [ 'description', 'labels'];
        return tmp;
    }
}
export const GranularMarkingMockFactory = new GranularMarkingMock();
