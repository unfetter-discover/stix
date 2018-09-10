import { Mock } from '../mock';
import { ExpandedStix } from './stix';
export declare class StixMock extends Mock<ExpandedStix> {
    mockOne(id?: string): ExpandedStix;
}
export declare const StixMockFactory: StixMock;
