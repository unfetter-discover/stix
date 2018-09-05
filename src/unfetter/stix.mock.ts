import { Mock } from '../mock';
import { GranularMarking } from '../stix/granular-marking';
import { Stix } from './stix';

export class StixMock extends Mock<Stix> {

    public mockOne(id?: string): Stix {
        const stix = new Stix();
        const number = this.genNumber();
        stix.id = id || `stix--${number}`;
        stix.modified = new Date().toISOString();
        stix.granular_markings = [new GranularMarking()];
        return stix;
    }

}

export const StixMockFactory = new StixMock();
