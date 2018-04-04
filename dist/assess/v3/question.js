"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question_answer_enum_1 = require("./question-answer.enum");
/**
 * @description represents answers for the three questions pertaining to protect, detect, respond
 */
class Question {
    constructor() {
        this.protect = question_answer_enum_1.QuestionAnswerEnum.UNANSWERED;
        this.detect = question_answer_enum_1.QuestionAnswerEnum.UNANSWERED;
        this.respond = question_answer_enum_1.QuestionAnswerEnum.UNANSWERED;
    }
}
exports.Question = Question;
