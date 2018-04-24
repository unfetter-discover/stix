import { Mock } from '../mock';
import { KillChainPhase } from './kill-chain-phase';
import { KillChainEnum } from './kill-chain.enum';

export class KillChainPhaseMock extends Mock<KillChainPhase> {
    public mockOne(): KillChainPhase {
        const tmp = new KillChainPhase(KillChainEnum.NTCTF, 'administer - planning');
        return tmp;
    }
}
export const KillChainPhaseMockFactory = new KillChainPhaseMock();
