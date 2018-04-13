import { StixEnum } from '../../unfetter/stix.enum';
import { QuestionAnswerEnum } from './question-answer.enum';

/**
 * @description represents answers for the three questions pertaining to protect, detect, respond
 */
export class Question {
    public id?: string;
    public type = StixEnum.QUESTION;
    public protect = QuestionAnswerEnum.UNANSWERED;
    public detect = QuestionAnswerEnum.UNANSWERED;
    public respond = QuestionAnswerEnum.UNANSWERED;
}
