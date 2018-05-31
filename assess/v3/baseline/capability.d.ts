import { Stix } from '../../../unfetter/stix';
/**
 * @description a capability could represent a product, ex. AntiVirus software
 *  This object is an Unfetter Stix extension
 */
export declare class Capability extends Stix {
    category?: string;
    /**
     * @description generate an object with default fields for this type
     *  will copy extra fields from the data passed in
     * @param data - optional
     */
    constructor(data?: object);
}
