import { Mock } from '../mock';
import { GranularMarking } from './granular-marking';
import { StixExpanded } from './stix-core';

export class StixCoreMock extends Mock<StixExpanded> {

    public mockOne(): StixExpanded {
        const stix = new StixExpanded();
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

export const StixCoreMockFactory = new StixCoreMock();
