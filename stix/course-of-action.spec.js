"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UUID = require("uuid");
var course_of_action_1 = require("./course-of-action");
var stix_core_enum_1 = require("./stix-core.enum");
describe('course of action stix model', function () {
    var stix;
    beforeEach(function () {
        stix = new course_of_action_1.CourseOfAction();
        var uuid = UUID.v4();
        stix.id = stix_core_enum_1.StixCoreEnum.COURSE_OF_ACTION + uuid;
        stix.type = stix_core_enum_1.StixCoreEnum.COURSE_OF_ACTION;
    });
    it('should have a constructor', function () {
        expect(stix).toBeDefined();
    });
    it('should know have a version', function () {
        expect(stix).toBeDefined();
        expect(stix.version).toEqual(2);
    });
    it('should know its own type', function () {
        expect(stix).toBeDefined();
        expect(stix.type).toEqual(stix_core_enum_1.StixCoreEnum.COURSE_OF_ACTION);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(stix_core_enum_1.StixCoreEnum.COURSE_OF_ACTION.toString());
    });
});
