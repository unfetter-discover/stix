import { Mock } from '../mock';
import { GranularMarking } from '../stix/granular-marking';
import { Stix } from './stix';

export class StixMock extends Mock<Stix> {

    public mockOne(): Stix {
        const stix = new Stix();
        const number = this.genNumber();
        stix.id = `stix-${number}`;
        stix.name = `name-${number}`;
        stix.description = `description-${number}`;
        stix.object_refs = ['1', '2'];
        stix.modified = new Date().toISOString();
        stix.granular_markings = [new GranularMarking()];
        return stix;
    }

}

export const StixMockFactory = new StixMock();
