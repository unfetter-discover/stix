import { Mock } from '../../mock';
import { Capability } from './capability';

export class CapabilityMock extends Mock<Capability> {
    public mockOne(): Capability {
        const tmp = new Capability();
        tmp.id = this.genId();
        tmp.created_by_ref = 'identity-' + this.genId();
        tmp.description = 'this does file scanning for hashes and malware';
        tmp.name = 'nortfee antivirus';
        return tmp;
    }
}
export const CapabilityMockFactory = new CapabilityMock();
