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

    it('should know hold an evaluation for mitigate', () => {
        expect(cut).toBeDefined();
        cut.name = 'mitigate';
        expect(cut.name).toEqual('mitigate');
        expect(cut.score).toEqual(QuestionAnswerEnum.MEDIUM);
    });

    it('should know hold an evaluation for indicate', () => {
        expect(cut).toBeDefined();
        cut.name = 'indicate';
        expect(cut.name).toEqual('indicate');
        expect(cut.score).toEqual(QuestionAnswerEnum.MEDIUM);
    });

    it('should know hold an evaluation for respond', () => {
        expect(cut).toBeDefined();
        cut.name = 'respond';
        expect(cut.name).toEqual('respond');
        expect(cut.score).toEqual(QuestionAnswerEnum.MEDIUM);
    });
});
