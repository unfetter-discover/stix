"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_enum_1 = require("../../../unfetter/stix.enum");
var question_answer_enum_1 = require("./question-answer.enum");
var question_mock_1 = require("./question.mock");
describe('assessment 3.0 question model', function () {
    var cut;
    beforeEach(function () {
        cut = question_mock_1.QuestionMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(cut).toBeDefined();
    });
    it('should know its own type', function () {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.QUESTION);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.QUESTION);
    });
    it('should know hold an evaluation for protect', function () {
        expect(cut).toBeDefined();
        cut.name = 'protect';
        expect(cut.name).toEqual('protect');
        expect(cut.score).toEqual(question_answer_enum_1.QuestionAnswerEnum.MEDIUM);
    });
    it('should know hold an evaluation for detect', function () {
        expect(cut).toBeDefined();
        cut.name = 'detect';
        expect(cut.name).toEqual('detect');
        expect(cut.score).toEqual(question_answer_enum_1.QuestionAnswerEnum.MEDIUM);
    });
    it('should know hold an evaluation for respond', function () {
        expect(cut).toBeDefined();
        cut.name = 'respond';
        expect(cut.name).toEqual('respond');
        expect(cut.score).toEqual(question_answer_enum_1.QuestionAnswerEnum.MEDIUM);
    });
    it('should know how to map PDR to MIR - 1', function () {
        expect(cut).toBeDefined();
        cut.name = 'protect';
        expect(cut.toMIR(cut.name)).toEqual('mitigate');
    });
    it('should know how to map PDR to MIR - 2', function () {
        expect(cut).toBeDefined();
        cut.name = 'detect';
        expect(cut.toMIR(cut.name)).toEqual('indicate');
    });
    it('should know how to map PDR to MIR - 3', function () {
        expect(cut).toBeDefined();
        cut.name = 'respond';
        expect(cut.toMIR(cut.name)).toEqual('respond');
    });
});
