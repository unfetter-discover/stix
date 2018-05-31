import { Mock } from '../../mock';
import { StixEnum } from '../../unfetter/stix.enum';
import { StixMockFactory } from '../../unfetter/stix.mock';
import { AssessmentObject } from './assessment-object';
import { AssessmentQuestionMockFactory } from './assessment-question.mock';

export class AssessmentObjectMock extends Mock<AssessmentObject> {

    /**
     * @param  {string} id?
     * @returns AssessmentObject
     */
    public mockOne(id?: string): AssessmentObject {
        const tmp = new AssessmentObject();
        tmp.assId = this.genId(StixEnum.ASSESSED_OBJECT);
        tmp.questions = AssessmentQuestionMockFactory.mockMany(8);
        tmp.risk = tmp.questions[0].risk;
        tmp.stix = StixMockFactory.mockOne();
        return tmp;
    }

    /**
     * @param  {number} risk
     * @param  {string} id?
     * @returns AssessmentObject
     */
    public mockWithRisk(risk: number, id?: string): AssessmentObject {
        const tmp = this.mockOne(id);
        tmp.risk = risk;
        return tmp;
    }
}
export const AssessmentObjectMockFactory = new AssessmentObjectMock();
