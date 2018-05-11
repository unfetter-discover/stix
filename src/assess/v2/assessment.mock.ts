import { Mock } from '../../mock';
import { GranularMarking } from '../../stix/granular-marking';
import { StixEnum } from '../../unfetter/stix.enum';
import { Assessment } from './assessment';
import { AssessmentObjectMockFactory } from './assessment-object.mock';

export class AssessmentMock extends Mock<Assessment> {

    public mockOne(): Assessment {
        const tmp = new Assessment();
        const number = this.genNumber();
        tmp.id = this.genId(StixEnum.ASSESSMENT);
        tmp.name = `zone 1 cluster ${number} assessment 2`;
        tmp.description = `description-${number}`;
        tmp.object_refs = ['1', '2'];
        tmp.modified = new Date().toISOString();
        tmp.granular_markings = [new GranularMarking()];
        tmp.assessment_objects  = AssessmentObjectMockFactory.mockMany(5);
        return tmp;
    }

}

export const AssessmentMockFactory = new AssessmentMock();
