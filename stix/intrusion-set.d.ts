import { StixExpanded } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';
/**
 *
 */
export declare class IntrusionSet extends StixExpanded<StixCoreEnum.INTRUSION_SET> {
    aliases?: string[];
    first_seen?: Date | string;
    last_seen?: Date | string;
    goals?: string[];
    resource_level?: string;
    primary_motivation?: string;
    secondary_motivations?: string[];
    /**
     *
     * @param data
     */
    constructor(data?: object);
}
