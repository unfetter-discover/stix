"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../mock");
const kill_chain_phase_1 = require("./kill-chain-phase");
const kill_chain_enum_1 = require("./kill-chain.enum");
class KillChainPhaseMock extends mock_1.Mock {
    mockOne() {
        const tmp = new kill_chain_phase_1.KillChainPhase(kill_chain_enum_1.KillChainEnum.NTCTF, 'administer - planning');
        return tmp;
    }
}
exports.KillChainPhaseMock = KillChainPhaseMock;
exports.KillChainPhaseMockFactory = new KillChainPhaseMock();
