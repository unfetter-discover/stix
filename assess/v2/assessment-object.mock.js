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
var stix_enum_1 = require("../../unfetter/stix.enum");
var stix_mock_1 = require("../../unfetter/stix.mock");
var assessment_object_1 = require("./assessment-object");
var assessment_question_mock_1 = require("./assessment-question.mock");
var AssessmentObjectMock = /** @class */ (function (_super) {
    __extends(AssessmentObjectMock, _super);
    function AssessmentObjectMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param  {string} id?
     * @returns AssessmentObject
     */
    AssessmentObjectMock.prototype.mockOne = function (id) {
        var tmp = new assessment_object_1.AssessmentObject();
        tmp.assId = this.genId(stix_enum_1.StixEnum.ASSESSED_OBJECT);
        tmp.questions = assessment_question_mock_1.AssessmentQuestionMockFactory.mockMany(8);
        tmp.risk = tmp.questions[0].risk;
        tmp.stix = stix_mock_1.StixMockFactory.mockOne();
        return tmp;
    };
    /**
     * @param  {number} risk
     * @param  {string} id?
     * @returns AssessmentObject
     */
    AssessmentObjectMock.prototype.mockWithRisk = function (risk, id) {
        var tmp = this.mockOne(id);
        tmp.risk = risk;
        return tmp;
    };
    return AssessmentObjectMock;
}(mock_1.Mock));
exports.AssessmentObjectMock = AssessmentObjectMock;
exports.AssessmentObjectMockFactory = new AssessmentObjectMock();
