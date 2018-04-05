"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const mock_1 = require("../../mock");
class QuestionMock extends mock_1.Mock {
    mockOne() {
        const tmp = new _1.Question();
        tmp.id = this.genId();
        tmp.detect = _1.QuestionAnswerEnum.MEDIUM;
        tmp.protect = _1.QuestionAnswerEnum.MEDIUM;
        tmp.respond = _1.QuestionAnswerEnum.MEDIUM;
        return tmp;
    }
}
exports.QuestionMock = QuestionMock;
exports.QuestionMockFactory = new QuestionMock();
