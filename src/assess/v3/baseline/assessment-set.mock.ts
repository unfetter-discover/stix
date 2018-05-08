import { Mock } from '../../../mock';
import { StixCoreEnum } from '../../../stix/stix-core.enum';
import { StixEnum } from '../../../unfetter/stix.enum';
import { AssessmentSet } from './assessment-set';
import { ObjectAssessmentMockFactory } from './object-assessment.mock';

export class AssessmentSetMock extends Mock<AssessmentSet> {
    public mockOne(
        capabilityNames: string[] = ['nortmcfee', 'oxygenwhite', 'seriousbeginings'],
        baseline = true,
    ): AssessmentSet {

        const tmp = new AssessmentSet();
        tmp.id = this.genId(StixEnum.ASSESSMENT_SET);
        tmp.created_by_ref = this.genId(StixCoreEnum.IDENTITY);
        tmp.description = 'this is my hometown network assessment';
        tmp.name = 'home towne network assessment draft 0';
        tmp.is_baseline = baseline;
        const objectAssessments = capabilityNames.map((capability) => {
            const objectAssessment = ObjectAssessmentMockFactory.mockOne(capability);
            return objectAssessment;
        });
        tmp.assessments = objectAssessments.map((_) => _.id || '');
        return tmp;
    }
}
export const AssessmentSetMockFactory = new AssessmentSetMock();
