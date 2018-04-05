import { KillChainPhase } from './kill-chain-phase';
import { KillChainPhaseMockFactory } from './kill-chain-phase.mock';

/**
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
describe('kill chain phase model', () => {

    let phase: KillChainPhase;

    beforeEach(() => {
        phase = KillChainPhaseMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(phase).toBeDefined();
    });

    it('should be of type attack-pattern', () => {
        expect(phase.kill_chain_name).toBeDefined();
        expect(phase.phase_name).toBeDefined();
    });

});
