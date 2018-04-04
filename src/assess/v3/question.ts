import { QuestionAnswerEnum } from "./question-answer.enum";

/**
 * @description represents answers for the three questions pertaining to protect, detect, respond
 */
export class Question { 
    public protect = QuestionAnswerEnum.UNANSWERED;
    public detect = QuestionAnswerEnum.UNANSWERED;
    public respond = QuestionAnswerEnum.UNANSWERED;
}