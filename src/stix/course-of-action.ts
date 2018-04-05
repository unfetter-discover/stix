import { StixCore } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

/**
 * @description
 */
export class CourseOfAction extends StixCore {

    /**
     * @param data
     */
    constructor(data?: StixCore) {
        super(data);
        this.type = StixCoreEnum.COURSE_OF_ACTION;
    }

}
