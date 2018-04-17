import { Mock } from '../../mock';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessedObject } from './assessed-object';
import { QuestionMockFactory } from './question.mock';

export class AssessedObjectMock extends Mock<AssessedObject> {
    public mockOne(): AssessedObject {
        const tmp = new AssessedObject();
        tmp.id = StixEnum.ASSESSED_OBJECT + '--' + this.genId();
        tmp.questions = QuestionMockFactory.mockMany(3);
        return tmp;
    }
}
export const AssessedObjectMockFactory = new AssessedObjectMock();
