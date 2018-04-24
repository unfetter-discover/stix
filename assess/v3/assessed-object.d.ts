import { StixEnum } from '../../unfetter/stix.enum';
import { Question } from './question';
/**
 * @description assessed object represents the three questions/answers to a single attack pattern
 */
export declare class AssessedObject {
    id?: string;
    assessed_object_ref: string;
    questions: Question[];
    type: StixEnum;
    constructor();
}
