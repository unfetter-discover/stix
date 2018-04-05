"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const assessed_object_1 = require("./assessed-object");
class AssessedObjectMock extends mock_1.Mock {
    mockOne() {
        const tmp = new assessed_object_1.AssessedObject();
        tmp.id = this.genId();
        return tmp;
    }
}
exports.AssessedObjectMock = AssessedObjectMock;
exports.AssessedObjectMockFactory = new AssessedObjectMock();
