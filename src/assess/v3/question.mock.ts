import { Question, QuestionAnswerEnum } from '.';
import { Mock } from '../../mock';

export class QuestionMock extends Mock<Question> {
    public mockOne(): Question {
        const tmp = new Question();
        tmp.id = this.genId();
        tmp.detect = QuestionAnswerEnum.MEDIUM;
        tmp.protect = QuestionAnswerEnum.MEDIUM;
        tmp.respond = QuestionAnswerEnum.MEDIUM;
        return tmp;
    }
}
export const QuestionMockFactory = new QuestionMock();
