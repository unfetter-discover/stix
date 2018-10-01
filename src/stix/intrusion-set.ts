import { StixExpanded } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

/**
 *
 */
export class IntrusionSet extends StixExpanded<StixCoreEnum.INTRUSION_SET> {
    public aliases?: string[];
    public first_seen?: Date | string;
    public last_seen?: Date | string;
    public goals?: string[];
    public resource_level?: string;
    public primary_motivation?: string;
    public secondary_motivations?: string[];

    /**
     *
     * @param data
     */
    constructor(data?: object) {
        super(data);
        this.type = StixCoreEnum.INTRUSION_SET;
    }
}
