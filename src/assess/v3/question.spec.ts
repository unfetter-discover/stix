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

    it('should know hold an evaluation across 3 data points', () => {
        expect(cut).toBeDefined();
        expect(cut.detect).toEqual(QuestionAnswerEnum.MEDIUM);
        expect(cut.protect).toEqual(QuestionAnswerEnum.MEDIUM);
        expect(cut.respond).toEqual(QuestionAnswerEnum.MEDIUM);
    });
});
