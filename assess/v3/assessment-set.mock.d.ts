import { Mock } from '../../mock';
import { AssessmentSet } from './assessment-set';
export declare class AssessmentSetMock extends Mock<AssessmentSet> {
    mockOne(capabilityNames?: string[], baseline?: boolean): AssessmentSet;
}
export declare const AssessmentSetMockFactory: AssessmentSetMock;
