import { Mock } from '../../mock';
import { AssessedObject } from './assessed-object';

export class AssessedObjectMock extends Mock<AssessedObject> {
    public mockOne(): AssessedObject {
        const tmp = new AssessedObject();
        tmp.id = this.genId();
        return tmp;
    }
}
export const AssessedObjectMockFactory = new AssessedObjectMock();
