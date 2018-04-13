import { Stix } from '../../unfetter/stix';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessedObject } from './assessed-object';

/**
 * @description Object assessment represents attack pattern to capability answers
 *  This object is an Unfetter Stix extension
 */
export class ObjectAssessment extends Stix {
    // object ref is a capability id
    public object_ref: string;
    // AssessedObject has a attack pattern ids
    public assessments_objects: AssessedObject[];

    /**
     * @description generate an object with default fields for this type
     *  will copy extra fields from the data passed in
     * @param data - optional
     */
    constructor(data?: object) {
        super(data);
        this.type = StixEnum.OBJECT_ASSESSMENT;
    }
}
