import * as UUID from 'uuid';
import { CourseOfAction } from './course-of-action';
import { StixCoreEnum } from './stix-core.enum';

describe('course of action stix model', () => {

    let stix: CourseOfAction;

    beforeEach(() => {
        stix = new CourseOfAction();
        const uuid = UUID.v4();
        stix.id = StixCoreEnum.COURSE_OF_ACTION + uuid;
        stix.type = StixCoreEnum.COURSE_OF_ACTION;
    });

    it('should have a constructor', () => {
        expect(stix).toBeDefined();
    });

    it('should know have a version', () => {
        expect(stix).toBeDefined();
        expect(stix.version).toEqual('2.0');
    });

    it('should know its own type', () => {
        expect(stix).toBeDefined();
        expect(stix.type).toEqual(StixCoreEnum.COURSE_OF_ACTION);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(StixCoreEnum.COURSE_OF_ACTION.toString());
    });

});
