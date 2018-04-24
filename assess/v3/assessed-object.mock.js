"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const stix_enum_1 = require("../../unfetter/stix.enum");
const assessed_object_1 = require("./assessed-object");
const question_mock_1 = require("./question.mock");
class AssessedObjectMock extends mock_1.Mock {
    mockOne() {
        const tmp = new assessed_object_1.AssessedObject();
        tmp.id = stix_enum_1.StixEnum.ASSESSED_OBJECT + '--' + this.genId();
        tmp.questions = question_mock_1.QuestionMockFactory.mockMany(3);
        return tmp;
    }
}
exports.AssessedObjectMock = AssessedObjectMock;
exports.AssessedObjectMockFactory = new AssessedObjectMock();
