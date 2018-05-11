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
var mock_1 = require("../../../mock");
var stix_core_enum_1 = require("../../../stix/stix-core.enum");
var stix_enum_1 = require("../../../unfetter/stix.enum");
var assessed_object_1 = require("./assessed-object");
var question_mock_1 = require("./question.mock");
var AssessedObjectMock = /** @class */ (function (_super) {
    __extends(AssessedObjectMock, _super);
    function AssessedObjectMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssessedObjectMock.prototype.mockOne = function () {
        var tmp = new assessed_object_1.AssessedObject();
        tmp.id = this.genId(stix_enum_1.StixEnum.ASSESSED_OBJECT);
        tmp.assessed_object_ref = this.genId(stix_core_enum_1.StixCoreEnum.ATTACK_PATTERN);
        tmp.questions = Array(3);
        tmp.questions[0] = question_mock_1.QuestionMockFactory.mockOne('protect');
        tmp.questions[1] = question_mock_1.QuestionMockFactory.mockOne('detect');
        tmp.questions[2] = question_mock_1.QuestionMockFactory.mockOne('respond');
        return tmp;
    };
    return AssessedObjectMock;
}(mock_1.Mock));
exports.AssessedObjectMock = AssessedObjectMock;
exports.AssessedObjectMockFactory = new AssessedObjectMock();
