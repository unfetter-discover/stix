import { StixEnum } from '../../unfetter/stix.enum';
import { Question } from './question';
/**
 * @description assessed object represents the three questions/answers to a single attack pattern
 */
export declare class AssessedObject {
    assessed_object_ref: string;
    id?: string;
    questions: Question[];
    readonly type: StixEnum;
    constructor();
}
