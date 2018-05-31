"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mock_1 = require("../../mock");
var assessment_question_1 = require("./assessment-question");
var risk_value_mock_1 = require("./risk-value.mock");
var AssessmentQuestionMock = /** @class */ (function (_super) {
    __extends(AssessmentQuestionMock, _super);
    function AssessmentQuestionMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssessmentQuestionMock.prototype.mockOne = function () {
        var tmp = new assessment_question_1.AssessmentQuestion();
        tmp.name = 'question name';
        tmp.risk = 1;
        tmp.options = risk_value_mock_1.RiskValueMockFactory.mockMany(4);
        tmp.selected_value = tmp.options[0];
        return tmp;
    };
    return AssessmentQuestionMock;
}(mock_1.Mock));
exports.AssessmentQuestionMock = AssessmentQuestionMock;
exports.AssessmentQuestionMockFactory = new AssessmentQuestionMock();
