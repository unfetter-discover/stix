import { Mock } from '../../../mock';
import { Capability } from './capability';
export declare class CapabilityMock extends Mock<Capability> {
    mockOne(name?: string, description?: string): Capability;
}
export declare const CapabilityMockFactory: CapabilityMock;
