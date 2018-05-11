import { Mock } from '../../mock';
import { AssessmentObject } from './assessment-object';
export declare class AssessmentObjectMock extends Mock<AssessmentObject> {
    /**
     * @param  {string} id?
     * @returns AssessmentObject
     */
    mockOne(id?: string): AssessmentObject;
    /**
     * @param  {number} risk
     * @param  {string} id?
     * @returns AssessmentObject
     */
    mockWithRisk(risk: number, id?: string): AssessmentObject;
}
export declare const AssessmentObjectMockFactory: AssessmentObjectMock;
