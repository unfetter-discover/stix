import { Mock } from '../../mock';
import { GranularMarking } from '../../stix/granular-marking';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessmentObjectMockFactory } from '../v2/assessment-object.mock';
import { Assess3Meta } from './assess3-meta';
import { Assessment } from './assessment';

export class AssessmentMock extends Mock<Assessment> {

    public mockOne(): Assessment {
        const tmp = new Assessment();
        const number = this.genNumber();
        tmp.id = this.genId(StixEnum.ASSESSMENT);
        tmp.name = `zone 1 cluster ${number} assessment 3`;
        tmp.description = `description-${number}`;
        tmp.object_refs = ['1', '2'];
        tmp.modified = new Date().toISOString();
        tmp.granular_markings = [new GranularMarking()];
        tmp.assessment_objects = AssessmentObjectMockFactory.mockMany(5);
        tmp.assessmentMeta = new Assess3Meta();
        tmp.assessmentMeta.baselineRef = 'baseline' + this.genId();
        tmp.assessmentMeta.includesIndicators = true;
        return tmp;
    }

}

export const AssessmentMockFactory = new AssessmentMock();
