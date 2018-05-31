"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assessment_object_mock_1 = require("./assessment-object.mock");
describe('assessment object model', function () {
    var cut;
    beforeEach(function () {
        cut = assessment_object_mock_1.AssessmentObjectMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(cut).toBeDefined();
    });
    it('should know its own type', function () {
        expect(cut).toBeDefined();
    });
    it('should have a risk', function () {
        expect(cut).toBeDefined();
        expect(cut.risk).toBeGreaterThan(-1);
    });
    it('should have a stix object', function () {
        expect(cut).toBeDefined();
        expect(cut.stix).toBeDefined();
    });
});
