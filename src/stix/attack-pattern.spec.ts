import { AttackPattern } from './attack-pattern';
import { AttackPatternMockFactory } from './attack-pattern.mock';
import { StixCoreEnum } from './stix-core.enum';

/**
 * Stix attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
describe('attack pattern model', () => {

    let ap: AttackPattern;

    beforeEach(() => {
        ap = AttackPatternMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(ap).toBeDefined();
        expect(ap.id).toBeDefined();
    });

    it('should be of type attack-pattern', () => {
        expect(ap.type).toBeDefined();
        expect(ap.type).toEqual(StixCoreEnum.ATTACK_PATTERN);
    });

});
