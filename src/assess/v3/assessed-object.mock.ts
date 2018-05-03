import { StixCoreEnum } from '../..';
import { Mock } from '../../mock';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessedObject } from './assessed-object';
import { QuestionMockFactory } from './question.mock';

export class AssessedObjectMock extends Mock<AssessedObject> {
    public mockOne(): AssessedObject {
        const tmp = new AssessedObject();
        tmp.id = this.genId(StixEnum.ASSESSED_OBJECT);
        tmp.assessed_object_ref = this.genId(StixCoreEnum.ATTACK_PATTERN);
        tmp.questions = Array(3);
        tmp.questions[0] = QuestionMockFactory.mockOne('protect');
        tmp.questions[1] = QuestionMockFactory.mockOne('detect');
        tmp.questions[2] = QuestionMockFactory.mockOne('respond');
        return tmp;
    }
}
export const AssessedObjectMockFactory = new AssessedObjectMock();
