import { StixEnum } from '../../../unfetter/stix.enum';
import { Capability } from './capability';
import { CapabilityMockFactory } from './capability.mock';

describe('capability model', () => {

    let cut: Capability;

    beforeEach(() => {
        cut = CapabilityMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });

    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(StixEnum.CAPABILITY);
        expect(cut.type).toEqual(StixEnum.CAPABILITY);
    });

});
