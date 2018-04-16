import { Stix } from '../../unfetter/stix';
import { StixEnum } from '../../unfetter/stix.enum';
import { AssessedObject } from './assessed-object';

/**
 *  @description Category is a generic bin name for a real products capability, ex. Network Monitor
 *  This object is an Unfetter Stix extension
 */
export class Category extends Stix {

    public assessedObjects: AssessedObject[];

    /**
     * @description generate an object with default fields for this type
     *  will copy extra fields from the data passed in
     * @param data - optional
     */
    constructor(data?: object) {
        super(data);
        this.type = StixEnum.CATEGORY;
    }
}
