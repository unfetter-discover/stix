import { Stix } from '../../../unfetter/stix';
import { AssessedObject } from './assessed-object';
/**
 * @description Object assessment represents attack pattern to capability answers
 *  This object is an Unfetter Stix extension
 */
export declare class ObjectAssessment extends Stix {
    assessments_objects: AssessedObject[];
    object_ref: string;
    /**
     * @description generate an object with default fields for this type
     *  will copy extra fields from the data passed in
     * @param data - optional
     */
    constructor(data?: object);
}
