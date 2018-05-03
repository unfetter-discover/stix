"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_enum_1 = require("../../unfetter/stix.enum");
const question_answer_enum_1 = require("./question-answer.enum");
/**
 * @description represents answers for the three questions pertaining to protect, detect, respond (PDR)
 */
class Question {
    constructor() {
        this.type = stix_enum_1.StixEnum.QUESTION;
        this.score = question_answer_enum_1.QuestionAnswerEnum.UNANSWERED;
    }
    toLongForm(answer) {
        switch (answer) {
            case (question_answer_enum_1.QuestionAnswerEnum.LOW):
                return 'LOW';
            case (question_answer_enum_1.QuestionAnswerEnum.MEDIUM):
                return 'MEDIUM';
            case (question_answer_enum_1.QuestionAnswerEnum.SIGNIFICANT):
                return 'SIGNIFICANT';
            case (question_answer_enum_1.QuestionAnswerEnum.NOT_APPLICABLE):
                return 'NOT APPLICABLE';
            case (question_answer_enum_1.QuestionAnswerEnum.UNANSWERED):
                return 'UNANSWERED';
        }
    }
    /**
     * @description translate the Protect Detect Respond string to its Mitigate Indicate Respond equivalent
     * @param  {PdrString} name
     * @returns MirString
     */
    toMIR(name) {
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
exports.Question = Question;
