import { Stix } from '../../unfetter/stix';
import { AssessmentQuestion } from './assessment-question';
/**
 * @description
 */
export declare class AssessmentObject<T extends Partial<Stix> = Stix> {
    risk: number;
    questions: AssessmentQuestion[];
    stix: T | undefined;
    assId: string | undefined;
    constructor(risk?: number, questions?: AssessmentQuestion[], stix?: T | undefined, assId?: string | undefined);
}
