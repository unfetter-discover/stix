import { Question, QuestionAnswerEnum } from '.';
import { Mock } from '../../../mock';
import { StixEnum } from '../../../unfetter/stix.enum';
import { PdrString } from './question';

export class QuestionMock extends Mock<Question> {
    public mockOne(name: PdrString = 'protect', score: QuestionAnswerEnum = QuestionAnswerEnum.MEDIUM): Question {
        const tmp = new Question();
        tmp.id = this.genId(StixEnum.QUESTION);
        tmp.name = name;
        tmp.score = score;
        return tmp;
    }
}
export const QuestionMockFactory = new QuestionMock();
