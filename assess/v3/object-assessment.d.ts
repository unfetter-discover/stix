import { Stix } from '../../unfetter/stix';
import { AssessedObject } from './assessed-object';
/**
 * @description Object assessment represents attack pattern to capability answers
 *  This object is an Unfetter Stix extension
 */
export declare class ObjectAssessment extends Stix {
    object_ref: string;
    assessments_objects: AssessedObject[];
    /**
     * @description generate an object with default fields for this type
     *  will copy extra fields from the data passed in
     * @param data - optional
     */
    constructor(data?: object);
}
