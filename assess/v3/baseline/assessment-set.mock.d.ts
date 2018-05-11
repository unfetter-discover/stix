import { Mock } from '../../../mock';
import { AssessmentSet } from './assessment-set';
export declare class AssessmentSetMock extends Mock<AssessmentSet> {
    /**
     * @param  {string|undefined} id?
     * @returns AssessmentSet
     */
    mockOne(id?: string | undefined): AssessmentSet;
    /**
     * @param capabilityNames=['nortmcfee', 'oxygenwhite', 'seriousbeginings']
     * @param baseline=true
     * @returns AssessmentSet
     */
    mockWithNames(capabilityNames?: string[], baseline?: boolean, id?: string): AssessmentSet;
}
export declare const AssessmentSetMockFactory: AssessmentSetMock;
