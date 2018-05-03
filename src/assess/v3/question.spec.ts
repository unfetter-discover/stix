import { StixEnum } from '../../unfetter/stix.enum';
import { Question } from './question';
import { QuestionAnswerEnum } from './question-answer.enum';
import { QuestionMockFactory } from './question.mock';

describe('assessment 3.0 question model', () => {

    let cut: Question;

    beforeEach(() => {
        cut = QuestionMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });

    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(StixEnum.QUESTION);
        expect(cut.type).toEqual(StixEnum.QUESTION);
    });

    it('should know hold an evaluation for protect', () => {
        expect(cut).toBeDefined();
        cut.name = 'protect';
        expect(cut.name).toEqual('protect');
        expect(cut.score).toEqual(QuestionAnswerEnum.MEDIUM);
    });

    it('should know hold an evaluation for detect', () => {
        expect(cut).toBeDefined();
        cut.name = 'detect';
        expect(cut.name).toEqual('detect');
        expect(cut.score).toEqual(QuestionAnswerEnum.MEDIUM);
    });

    it('should know hold an evaluation for respond', () => {
        expect(cut).toBeDefined();
        cut.name = 'respond';
        expect(cut.name).toEqual('respond');
        expect(cut.score).toEqual(QuestionAnswerEnum.MEDIUM);
    });

    it('should know how to map PDR to MIR - 1', () => {
        expect(cut).toBeDefined();
        cut.name = 'protect';
        expect(cut.toMIR(cut.name)).toEqual('mitigate');
    });

    it('should know how to map PDR to MIR - 2', () => {
        expect(cut).toBeDefined();
        cut.name = 'detect';
        expect(cut.toMIR(cut.name)).toEqual('indicate');
    });

    it('should know how to map PDR to MIR - 3', () => {
        expect(cut).toBeDefined();
        cut.name = 'respond';
        expect(cut.toMIR(cut.name)).toEqual('respond');
    });
});
