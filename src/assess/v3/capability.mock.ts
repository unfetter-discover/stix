import { Mock } from '../../mock';
import { StixEnum } from '../../unfetter/stix.enum';
import { Capability } from './capability';

export class CapabilityMock extends Mock<Capability> {
    public mockOne(): Capability {
        const tmp = new Capability();
        tmp.id = StixEnum.CAPABILITY + '--' + this.genId();
        tmp.created_by_ref = 'identity--' + this.genId();
        tmp.description = 'this does file scanning for hashes and malware';
        tmp.name = 'nortmcfee antivirus';
        return tmp;
    }
}
export const CapabilityMockFactory = new CapabilityMock();
