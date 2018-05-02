"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const mock_1 = require("../../mock");
const stix_enum_1 = require("../../unfetter/stix.enum");
const assessed_object_1 = require("./assessed-object");
const question_mock_1 = require("./question.mock");
class AssessedObjectMock extends mock_1.Mock {
    mockOne() {
        const tmp = new assessed_object_1.AssessedObject();
        tmp.id = this.genId(stix_enum_1.StixEnum.ASSESSED_OBJECT);
        tmp.assessed_object_ref = this.genId(__1.StixCoreEnum.ATTACK_PATTERN);
        tmp.questions = Array(3);
        tmp.questions[0] = question_mock_1.QuestionMockFactory.mockOne('protect');
        tmp.questions[1] = question_mock_1.QuestionMockFactory.mockOne('detect');
        tmp.questions[2] = question_mock_1.QuestionMockFactory.mockOne('respond');
        return tmp;
    }
}
exports.AssessedObjectMock = AssessedObjectMock;
exports.AssessedObjectMockFactory = new AssessedObjectMock();
