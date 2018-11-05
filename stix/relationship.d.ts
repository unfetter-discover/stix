import { StixCore } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';
/**
 *
 */
export declare class Relationship extends StixCore<StixCoreEnum.RELATIONSHIP> {
    description?: string;
    relationship_type: string;
    source_ref: string;
    target_ref: string;
    /**
     *
     * @param data
     */
    constructor(data?: object);
}
