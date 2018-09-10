import { GranularMarking } from './granular-marking';
import { GranularMarkingMockFactory } from './granular-marking.mock';
import { StixCoreEnum } from './stix-core.enum';

describe('granular markings stix model', () => {

    let stix: GranularMarking;

    beforeEach(() => {
        stix = GranularMarkingMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(stix).toBeDefined();
    });

    it('should know its own type', () => {
        expect(stix).toBeDefined();
        expect(stix.marking_ref.startsWith(StixCoreEnum.MARKING_DEFINITION)).toBeTruthy();
    });

});
