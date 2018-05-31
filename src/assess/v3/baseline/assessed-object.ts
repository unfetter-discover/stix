import { StixEnum } from '../../../unfetter/stix.enum';
import { Question } from './question';

/**
 * @description assessed object represents the three questions/answers to a single attack pattern
 */
export class AssessedObject {
    // ref to attack pattern id
    public assessed_object_ref: string;
    public id?: string;
    public questions: Question[];
    public readonly type: StixEnum;

    constructor() {
        this.type = StixEnum.ASSESSED_OBJECT;
        this.questions = this.questions || [];
    }
}
