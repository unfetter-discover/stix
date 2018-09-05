import { ExpandedStix } from '../../../unfetter/stix';
import { AssessedObject } from './assessed-object';
/**
 *  @description Category is a generic bin name for a real products capability, ex. Network Monitor
 *  This object is an Unfetter Stix extension
 */
export declare class Category extends ExpandedStix {
    assessed_objects: AssessedObject[];
    /**
     * @description generate an object with default fields for this type
     *  will copy extra fields from the data passed in
     * @param data - optional
     */
    constructor(data?: object);
}
