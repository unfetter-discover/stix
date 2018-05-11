"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kill_chain_phase_mock_1 = require("./kill-chain-phase.mock");
/**
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
describe('kill chain phase model', function () {
    var phase;
    beforeEach(function () {
        phase = kill_chain_phase_mock_1.KillChainPhaseMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(phase).toBeDefined();
    });
    it('should be of type attack-pattern', function () {
        expect(phase.kill_chain_name).toBeDefined();
        expect(phase.phase_name).toBeDefined();
    });
});
