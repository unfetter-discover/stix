import { Stix } from '../../unfetter/stix';
import { AssessmentQuestion } from './assessment-question';
/**
 * @description
 */
export declare class AssessmentObject<T extends Partial<Stix> = Stix> {
    risk: number;
    questions: AssessmentQuestion[];
    stix?: T;
    assId?: string;
}
