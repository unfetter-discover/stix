import { Mock } from '../mock';
import { Stix } from './stix';
export declare class StixMock extends Mock<Stix> {
    mockOne(id?: string): Stix;
}
export declare const StixMockFactory: StixMock;
