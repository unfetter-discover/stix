import { Mock } from '../mock';
import { GranularMarking } from './granular-marking';
import { StixCore } from './stix-core';

export class StixCoreMock extends Mock<StixCore> {

    public mockOne(): StixCore {
        const stix = new StixCore();
        const number = this.genNumber();
        stix.id = `stix-${number}`;
        // stix.name = `name-${number}`;
        // stix.description = `description-${number}`;
        // stix.object_refs = ['1', '2'];
        stix.modified = new Date().toISOString();
        stix.granular_markings = [new GranularMarking()];
        return stix;
    }

}

export const StixCoreMockFactory = new StixCoreMock();
