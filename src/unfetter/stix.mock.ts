import { Mock } from '../mock';
import { GranularMarking } from '../stix/granular-marking';
import { ExpandedStix } from './stix';

export class StixMock extends Mock<ExpandedStix> {

    public mockOne(id?: string): ExpandedStix {
        const stix = new ExpandedStix();
        const number = this.genNumber();
        stix.id = id || `stix--${number}`;
        stix.modified = new Date().toISOString();
        stix.granular_markings = [new GranularMarking()];
        return stix;
    }

}

export const StixMockFactory = new StixMock();
