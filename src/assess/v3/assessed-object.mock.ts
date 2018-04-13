import { Mock } from '../../mock';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessedObject } from './assessed-object';

export class AssessedObjectMock extends Mock<AssessedObject> {
    public mockOne(): AssessedObject {
        const tmp = new AssessedObject();
        tmp.id = StixEnum.ASSESSED_OBJECT + '--' + this.genId();
        return tmp;
    }
}
export const AssessedObjectMockFactory = new AssessedObjectMock();
