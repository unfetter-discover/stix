import { Stix } from '../../unfetter/stix';
import { AssessmentQuestion } from './assessment-question';

/**
 * @description
 */
export class AssessmentObject<T extends Partial<Stix> = Stix> {
    public risk: number;
    public questions = [] as AssessmentQuestion[];
    public stix?: T;
    public assId?: string;
}
