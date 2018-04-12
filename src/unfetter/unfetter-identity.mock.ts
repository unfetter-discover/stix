import { Mock } from '../mock';
import { UnfetterIdentity } from './unfetter-identity';
export class UnfetterIdentityMock extends Mock<UnfetterIdentity> {
    public mockOne(): UnfetterIdentity {
        const tmp = new UnfetterIdentity();
        tmp.id = this.genId();
        tmp.name = 'bob';
        tmp.contact_information = 'bob at po box';
        tmp.sectors = ['automotive'];
        return tmp;
    }
}
export const UnfetterIdentityMockFactory = new UnfetterIdentityMock();
