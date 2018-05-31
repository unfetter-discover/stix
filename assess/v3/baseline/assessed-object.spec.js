"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../../../stix/stix-core.enum");
var stix_enum_1 = require("../../../unfetter/stix.enum");
var assessed_object_mock_1 = require("./assessed-object.mock");
describe('assessed object model', function () {
    var cut;
    beforeEach(function () {
        cut = assessed_object_mock_1.AssessedObjectMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(cut).toBeDefined();
    });
    it('should know its own type', function () {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.ASSESSED_OBJECT);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.ASSESSED_OBJECT);
    });
    it('should know its link to an attack pattern', function () {
        expect(cut).toBeDefined();
        expect(cut.assessed_object_ref).toContain(stix_core_enum_1.StixCoreEnum.ATTACK_PATTERN);
    });
    it('should answer three questions', function () {
        expect(cut).toBeDefined();
        expect(cut.questions).toBeDefined();
        expect(cut.questions.length).toEqual(3);
        var questions = cut.questions;
        questions.forEach(function (el) { return expect(el.score).toBeDefined(); });
    });
});
