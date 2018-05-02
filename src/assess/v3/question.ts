import { StixEnum } from '../../unfetter/stix.enum';
import { QuestionAnswerEnum } from './question-answer.enum';

export type PdrString = 'protect' | 'detect' | 'respond' | undefined;
export type MirString = 'mitigate' | 'indicate' | 'respond' | undefined;
/**
 * @description represents answers for the three questions pertaining to protect, detect, respond (PDR)
 */
export class Question {
    public id?: string;
    public type = StixEnum.QUESTION;
    public name: PdrString;
    public score: QuestionAnswerEnum = QuestionAnswerEnum.UNANSWERED;

    public toLongForm(answer: QuestionAnswerEnum): string {
        switch (answer) {
            case (QuestionAnswerEnum.LOW):
                return 'LOW';
            case (QuestionAnswerEnum.MEDIUM):
                return 'MEDIUM';
            case (QuestionAnswerEnum.SIGNIFICANT):
                return 'SIGNIFICANT';
            case (QuestionAnswerEnum.NOT_APPLICABLE):
                return 'NOT APPLICABLE';
            case (QuestionAnswerEnum.UNANSWERED):
                return 'UNANSWERED';
        }
    }

    /**
     * @description translate the Protect Detect Respond string to its Mitigate Indicate Respond equivalent
     * @param  {PdrString} name
     * @returns MirString
     */
    public toMIR(name: PdrString): MirString {
        if (!name) {
            return name;
        }

        const lowerCaseName = name.toLowerCase();
        switch (lowerCaseName) {
            case ('protect'):
                return 'mitigate';
            case ('detect'):
                return 'indicate';
            case ('respond'):
                return 'respond';
            default:
                return undefined;
        }
    }
}
