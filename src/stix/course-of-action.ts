import { StixExpanded } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

/**
 * @description
 */
export class CourseOfAction extends StixExpanded {

    /**
     * @param data
     */
    constructor(data?: StixExpanded) {
        super(data);
        this.type = StixCoreEnum.COURSE_OF_ACTION;
    }

}
