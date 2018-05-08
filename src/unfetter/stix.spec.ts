import { Stix } from './stix';
import { StixMockFactory } from './stix.mock';

/**
 * @see https://stixproject.github.io/
 */
describe('stix model', () => {

    let stix: Stix;

    beforeEach(() => {
        stix = StixMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(stix).toBeDefined();
    });

    it('should have an undefined type', () => {
        expect(stix.type).toBeUndefined();
    });

    it('should have extra attributes', () => {
        expect(stix.extendedProperties);
        expect(stix.metaProperties);
    });

    it('should generate json', () => {
        expect(stix.toJson()).toContain('description');
        expect(stix.toJson()).toContain('stixname');
        expect(stix.toJson()).toContain('author');
        expect(stix.toJson()).toContain('ref1');
        expect(stix.toJson()).toContain('ref2');
    });
});
