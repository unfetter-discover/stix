"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_enum_1 = require("../../unfetter/stix.enum");
const question_answer_enum_1 = require("./question-answer.enum");
/**
 * @description represents answers for the three questions pertaining to protect, detect, respond
 */
class Question {
    constructor() {
        this.type = stix_enum_1.StixEnum.QUESTION;
        this.score = question_answer_enum_1.QuestionAnswerEnum.UNANSWERED;
    }
    // public protect = QuestionAnswerEnum.UNANSWERED;
    // public detect = QuestionAnswerEnum.UNANSWERED;
    // public respond = QuestionAnswerEnum.UNANSWERED;
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
}
exports.Question = Question;
