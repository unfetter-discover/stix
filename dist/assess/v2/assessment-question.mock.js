"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const assessment_question_1 = require("./assessment-question");
const risk_value_mock_1 = require("./risk-value.mock");
class AssessmentQuestionMock extends mock_1.Mock {
    mockOne() {
        const tmp = new assessment_question_1.AssessmentQuestion();
        tmp.name = 'question name';
        tmp.risk = 1;
        tmp.options = risk_value_mock_1.RiskValueMockFactory.mockMany(4);
        tmp.selected_value = tmp.options[0];
        return tmp;
    }
}
exports.AssessmentQuestionMock = AssessmentQuestionMock;
exports.AssessmentQuestionMockFactory = new AssessmentQuestionMock();
