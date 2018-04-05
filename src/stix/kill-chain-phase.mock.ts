import { Mock } from '../mock';
import { KillChainPhase } from './kill-chain-phase';
import { KillChainEnum } from './kill-chain.enum';

export class KillChainPhaseMock extends Mock<KillChainPhase> {
    public mockOne(): KillChainPhase {
        const tmp = new KillChainPhase();
        tmp.kill_chain_name = KillChainEnum.NTCTF;
        tmp.phase_name = 'administer - planning';
        return tmp;
    }
}
export const KillChainPhaseMockFactory = new KillChainPhaseMock();
