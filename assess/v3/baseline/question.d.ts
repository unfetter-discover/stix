import { StixEnum } from '../../../unfetter/stix.enum';
import { QuestionAnswerEnum } from './question-answer.enum';
export declare type PdrString = 'protect' | 'detect' | 'respond' | undefined;
export declare type MirString = 'mitigate' | 'indicate' | 'respond' | undefined;
/**
 * @description represents answers for the three questions pertaining to protect, detect, respond (PDR)
 */
export declare class Question {
    id?: string;
    type: StixEnum;
    name: PdrString;
    score: QuestionAnswerEnum;
    toLongForm(answer: QuestionAnswerEnum): string;
    /**
     * @description translate the Protect Detect Respond string to its Mitigate Indicate Respond equivalent
     * @param  {PdrString} name
     * @returns MirString
     */
    toMIR(name: PdrString): MirString;
}
