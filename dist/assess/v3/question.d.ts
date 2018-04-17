import { StixEnum } from '../../unfetter/stix.enum';
import { QuestionAnswerEnum } from './question-answer.enum';
/**
 * @description represents answers for the three questions pertaining to protect, detect, respond
 */
export declare class Question {
    id?: string;
    type: StixEnum;
    name: 'mitigate' | 'indicate' | 'respond';
    score: QuestionAnswerEnum;
    toLongForm(answer: QuestionAnswerEnum): string;
}
