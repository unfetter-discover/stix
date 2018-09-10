import { ExpandedStix } from '../../../unfetter/stix';
import { StixEnum } from '../../../unfetter/stix.enum';

/**
 * @description a capability could represent a product, ex. AntiVirus software
 *  This object is an Unfetter Stix extension
 */
export class Capability extends ExpandedStix {

    public category?: string;

    /**
     * @description generate an object with default fields for this type
     *  will copy extra fields from the data passed in
     * @param data - optional
     */
    constructor(data?: object) {
        super(data);
        this.type = StixEnum.CAPABILITY;
    }
}
