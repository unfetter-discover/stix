import { StixEnum } from '../../unfetter/stix.enum';
import { QuestionAnswerEnum } from './question-answer.enum';

/**
 * @description represents answers for the three questions pertaining to protect, detect, respond
 */
export class Question {
    public id?: string;
    public type = StixEnum.QUESTION;
    public name: 'mitigate' | 'indicate' | 'respond';
    public score: QuestionAnswerEnum = QuestionAnswerEnum.UNANSWERED;
    // public protect = QuestionAnswerEnum.UNANSWERED;
    // public detect = QuestionAnswerEnum.UNANSWERED;
    // public respond = QuestionAnswerEnum.UNANSWERED;

    public toLongForm(answer: QuestionAnswerEnum): string {
        switch (answer) {
            case(QuestionAnswerEnum.LOW):
                return 'LOW';
            case(QuestionAnswerEnum.MEDIUM):
                return 'MEDIUM';
            case(QuestionAnswerEnum.SIGNIFICANT):
                return 'SIGNIFICANT';
            case(QuestionAnswerEnum.NOT_APPLICABLE):
                return 'NOT APPLICABLE';
            case(QuestionAnswerEnum.UNANSWERED):
                return 'UNANSWERED';
        }
    }
}
