import { StixCoreEnum } from '../..';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessedObject } from './assessed-object';
import { AssessedObjectMockFactory } from './assessed-object.mock';

describe('assessed object model', () => {

    let cut: AssessedObject;

    beforeEach(() => {
        cut = AssessedObjectMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });

    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(StixEnum.ASSESSED_OBJECT);
        expect(cut.type).toEqual(StixEnum.ASSESSED_OBJECT);
    });

    it('should know its link to an attack pattern', () => {
        expect(cut).toBeDefined();
        expect(cut.assessed_object_ref).toContain(StixCoreEnum.ATTACK_PATTERN);
    });

    it('should answer three questions', () => {
        expect(cut).toBeDefined();
        expect(cut.questions).toBeDefined();
        expect(cut.questions.length).toEqual(3);
        const questions = cut.questions;
        questions.forEach((el) => expect(el.score).toBeDefined());
    });

});
