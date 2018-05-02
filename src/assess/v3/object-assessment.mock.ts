import { Mock } from '../../mock';
import { StixCoreEnum } from '../../stix/stix-core.enum';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessedObjectMockFactory } from './assessed-object.mock';
import { CapabilityMockFactory } from './capability.mock';
import { ObjectAssessment } from './object-assessment';

export class ObjectAssessmentMock extends Mock<ObjectAssessment> {
    public mockOne(capabilityName?: string): ObjectAssessment {
        const tmp = new ObjectAssessment();
        tmp.id = this.genId(StixEnum.OBJECT_ASSESSMENT);
        tmp.created_by_ref = this.genId(StixCoreEnum.IDENTITY);
        tmp.assessments_objects = AssessedObjectMockFactory.mockMany(3);
        tmp.object_ref = CapabilityMockFactory.mockOne(capabilityName).id || '';
        return tmp;
    }
}
export const ObjectAssessmentMockFactory = new ObjectAssessmentMock();
