import { Stix } from '../../unfetter/stix';
import { AssessmentQuestion } from './assessment-question';

/**
 * @description
 */
export class AssessmentObject<T extends Partial<Stix> = Stix> {

    public constructor(
        public risk = -1,
        public questions = [] as AssessmentQuestion[],
        public stix?: T,
        public assId?: string,
    ) { }
}
