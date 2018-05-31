import { AssessmentObject } from './assessment-object';
import { AssessmentObjectMockFactory } from './assessment-object.mock';

describe('assessment object model', () => {

    let cut: AssessmentObject;

    beforeEach(() => {
        cut = AssessmentObjectMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });

    it('should know its own type', () => {
        expect(cut).toBeDefined();
    });

    it('should have a risk', () => {
        expect(cut).toBeDefined();
        expect(cut.risk).toBeGreaterThan(-1);
    });

    it('should have a stix object', () => {
        expect(cut).toBeDefined();
        expect(cut.stix).toBeDefined();
    });
});
