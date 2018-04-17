"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID = require("uuid");
const course_of_action_1 = require("./course-of-action");
const stix_core_enum_1 = require("./stix-core.enum");
describe('course of action stix model', () => {
    let stix;
    beforeEach(() => {
        stix = new course_of_action_1.CourseOfAction();
        const uuid = UUID.v4();
        stix.id = stix_core_enum_1.StixCoreEnum.COURSE_OF_ACTION + uuid;
        stix.type = stix_core_enum_1.StixCoreEnum.COURSE_OF_ACTION;
    });
    it('should have a constructor', () => {
        expect(stix).toBeDefined();
    });
    it('should know have a version', () => {
        expect(stix).toBeDefined();
        expect(stix.version).toEqual(2);
    });
    it('should know its own type', () => {
        expect(stix).toBeDefined();
        expect(stix.type).toEqual(stix_core_enum_1.StixCoreEnum.COURSE_OF_ACTION);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(stix_core_enum_1.StixCoreEnum.COURSE_OF_ACTION.toString());
    });
});
