import { Question, QuestionAnswerEnum } from '.';
import { Mock } from '../../mock';
import { StixEnum } from '../../unfetter/stix.enum';

export class QuestionMock extends Mock<Question> {
    public mockOne(): Question {
        const tmp = new Question();
        tmp.id = this.genId(StixEnum.QUESTION);
        // tmp.detect = QuestionAnswerEnum.MEDIUM;
        // tmp.protect = QuestionAnswerEnum.MEDIUM;
        // tmp.respond = QuestionAnswerEnum.MEDIUM;
        tmp.name = 'mitigate';
        tmp.score = QuestionAnswerEnum.MEDIUM;
        return tmp;
    }
}
export const QuestionMockFactory = new QuestionMock();
