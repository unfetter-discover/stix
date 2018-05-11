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
var _1 = require(".");
var mock_1 = require("../../../mock");
var stix_enum_1 = require("../../../unfetter/stix.enum");
var QuestionMock = /** @class */ (function (_super) {
    __extends(QuestionMock, _super);
    function QuestionMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionMock.prototype.mockOne = function (name, score) {
        if (name === void 0) { name = 'protect'; }
        if (score === void 0) { score = _1.QuestionAnswerEnum.MEDIUM; }
        var tmp = new _1.Question();
        tmp.id = this.genId(stix_enum_1.StixEnum.QUESTION);
        tmp.name = name;
        tmp.score = score;
        return tmp;
    };
    return QuestionMock;
}(mock_1.Mock));
exports.QuestionMock = QuestionMock;
exports.QuestionMockFactory = new QuestionMock();
