import { Question, QuestionAnswerEnum } from '.';
import { Mock } from '../../../mock';
import { PdrString } from './question';
export declare class QuestionMock extends Mock<Question> {
    mockOne(name?: PdrString, score?: QuestionAnswerEnum): Question;
}
export declare const QuestionMockFactory: QuestionMock;
