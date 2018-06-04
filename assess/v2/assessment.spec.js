"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assessment_1 = require("./assessment");
var assessment_mock_1 = require("./assessment.mock");
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
    it('should have a copy constructor', function () {
        expect(cut.assessment_objects).toBeDefined();
        expect(cut.assessment_objects.length).toBeGreaterThan(1);
        expect(cut.name).toBeDefined();
        expect(cut.assessmentMeta).toBeDefined();
        var numAssessmentObjects = cut.assessment_objects.length;
        var name = cut.name;
        var copied = new assessment_1.Assessment(cut);
        // console.log(JSON.stringify(cut, undefined, '\t'));
        // console.log(JSON.stringify(copied, undefined, '\t'));
        expect(copied).toBeDefined();
        expect(copied.name).toEqual(name);
        expect(copied.assessment_objects).toBeDefined();
        expect(copied.assessment_objects.length).toEqual(numAssessmentObjects);
    });
});
