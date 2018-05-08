import { Mock } from '../../../mock';
import { StixCoreEnum } from '../../../stix/stix-core.enum';
import { StixEnum } from '../../../unfetter/stix.enum';
import { Capability } from './capability';

export class CapabilityMock extends Mock<Capability> {
    public mockOne(name = 'nortmcfee antivirus', description = 'file scanning for hashes and malware'): Capability {
        const tmp = new Capability();
        tmp.id = this.genId(StixEnum.CAPABILITY);
        tmp.created_by_ref = this.genId(StixCoreEnum.IDENTITY);
        tmp.description = description;
        tmp.name = name;
        return tmp;
    }
}
export const CapabilityMockFactory = new CapabilityMock();
