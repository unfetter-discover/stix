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
var mock_1 = require("../mock");
var wizard_question_grouping_mock_1 = require("./wizard-question-grouping.mock");
var WizardQuestionGroupingsMock = /** @class */ (function (_super) {
    __extends(WizardQuestionGroupingsMock, _super);
    function WizardQuestionGroupingsMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardQuestionGroupingsMock.prototype.mockOne = function () {
        var tmp = {
            groupings: [],
        };
        var groupingArr = wizard_question_grouping_mock_1.WizardQuestionGroupingMockFactory.mockMany(4);
        tmp.groupings = groupingArr;
        return tmp;
    };
    return WizardQuestionGroupingsMock;
}(mock_1.Mock));
exports.WizardQuestionGroupingsMock = WizardQuestionGroupingsMock;
exports.WizardQuestionGroupingsMockFactory = new WizardQuestionGroupingsMock();
