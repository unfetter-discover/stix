import { Mock } from '../../../mock';
import { StixCoreEnum } from '../../../stix/stix-core.enum';
import { StixEnum } from '../../../unfetter/stix.enum';
import { AssessmentSet } from './assessment-set';
import { ObjectAssessmentMockFactory } from './object-assessment.mock';

export class AssessmentSetMock extends Mock<AssessmentSet> {

    /**
     * @param  {string|undefined} id?
     * @returns AssessmentSet
     */
    public mockOne(id?: string | undefined): AssessmentSet {
        const names = ['nortmcfee', 'oxygenwhite', 'seriousbeginings'];
        const baseline = true;
        return this.mockWithNames(names, baseline, id);
    }

    /**
     * @param capabilityNames=['nortmcfee', 'oxygenwhite', 'seriousbeginings']
     * @param baseline=true
     * @returns AssessmentSet
     */
    public mockWithNames(
        capabilityNames = ['nortmcfee', 'oxygenwhite', 'seriousbeginings'],
        baseline = true,
        id?: string): AssessmentSet {
        const tmp = new AssessmentSet();
        tmp.id = id || this.genId(StixEnum.ASSESSMENT_SET);
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
