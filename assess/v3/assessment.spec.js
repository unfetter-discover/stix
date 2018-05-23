"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var course_of_action_1 = require("../../stix/course-of-action");
var indicator_1 = require("../../stix/indicator");
var report_1 = require("../../stix/report");
var assessment_object_mock_1 = require("../v2/assessment-object.mock");
var assessment_eval_type_enum_1 = require("./assessment-eval-type.enum");
var assessment_mock_1 = require("./assessment.mock");
var object_assessment_1 = require("./baseline/object-assessment");
describe('assessment model', function () {
    var cut;
    beforeEach(function () {
        cut = assessment_mock_1.AssessmentMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(cut).toBeDefined();
    });
    it('should know have a name', function () {
        expect(cut.name).toBeDefined();
    });
    it('should know its own type', function () {
        expect(cut.determineAssessmentType()).toBeDefined();
    });
    it('should know when it is unassessed', function () {
        cut.assessment_objects = [];
        expect(cut.determineAssessmentType()).toBeDefined();
        expect(cut.determineAssessmentType()).toEqual(assessment_eval_type_enum_1.AssessmentEvalTypeEnum.UNASSESSED);
    });
    it('should know when it is an indicator assessment', function () {
        var assessedObject = assessment_object_mock_1.AssessmentObjectMockFactory.mockOne();
        assessedObject.stix = new indicator_1.Indicator();
        cut.assessment_objects = [assessedObject];
        expect(cut.determineAssessmentType()).toBeDefined();
        expect(cut.determineAssessmentType()).toEqual(assessment_eval_type_enum_1.AssessmentEvalTypeEnum.INDICATORS);
    });
    it('should know when it is a mitigation assessment', function () {
        var assessedObject = assessment_object_mock_1.AssessmentObjectMockFactory.mockOne();
        assessedObject.stix = new course_of_action_1.CourseOfAction();
        cut.assessment_objects = [assessedObject];
        expect(cut.determineAssessmentType()).toBeDefined();
        expect(cut.determineAssessmentType()).toEqual(assessment_eval_type_enum_1.AssessmentEvalTypeEnum.MITIGATIONS);
    });
    it('should know when it is a capability assessment', function () {
        var assessedObject = assessment_object_mock_1.AssessmentObjectMockFactory.mockOne();
        assessedObject.stix = new object_assessment_1.ObjectAssessment();
        cut.assessment_objects = [assessedObject];
        expect(cut.determineAssessmentType()).toBeDefined();
        expect(cut.determineAssessmentType()).toEqual(assessment_eval_type_enum_1.AssessmentEvalTypeEnum.CAPABILITIES);
    });
    it('should identity when it is an unknown assessment', function () {
        var assessedObject = assessment_object_mock_1.AssessmentObjectMockFactory.mockOne();
        assessedObject.stix = new report_1.Report();
        cut.assessment_objects = [assessedObject];
        expect(cut.determineAssessmentType()).toBeDefined();
        expect(cut.determineAssessmentType()).toEqual(assessment_eval_type_enum_1.AssessmentEvalTypeEnum.UNKNOWN_TYPE);
    });
});
