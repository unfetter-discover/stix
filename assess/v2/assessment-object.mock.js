"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const assessment_object_1 = require("./assessment-object");
const assessment_question_mock_1 = require("./assessment-question.mock");
class AssessmentObjectMock extends mock_1.Mock {
    mockOne() {
        const tmp = new assessment_object_1.AssessmentObject();
        tmp.assId = this.genId();
        tmp.questions = assessment_question_mock_1.AssessmentQuestionMockFactory.mockMany(8);
        tmp.risk = tmp.questions[0].risk;
        return tmp;
    }
}
exports.AssessmentObjectMock = AssessmentObjectMock;
exports.AssessmentObjectMockFactory = new AssessmentObjectMock();
