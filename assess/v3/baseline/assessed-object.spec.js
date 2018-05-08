"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_enum_1 = require("../../../stix/stix-core.enum");
const stix_enum_1 = require("../../../unfetter/stix.enum");
const assessed_object_mock_1 = require("./assessed-object.mock");
describe('assessed object model', () => {
    let cut;
    beforeEach(() => {
        cut = assessed_object_mock_1.AssessedObjectMockFactory.mockOne();
    });
    it('should have a constructor', () => {
        expect(cut).toBeDefined();
    });
    it('should know its own type', () => {
        expect(cut).toBeDefined();
        expect(cut.id).toContain(stix_enum_1.StixEnum.ASSESSED_OBJECT);
        expect(cut.type).toEqual(stix_enum_1.StixEnum.ASSESSED_OBJECT);
    });
    it('should know its link to an attack pattern', () => {
        expect(cut).toBeDefined();
        expect(cut.assessed_object_ref).toContain(stix_core_enum_1.StixCoreEnum.ATTACK_PATTERN);
    });
    it('should answer three questions', () => {
        expect(cut).toBeDefined();
        expect(cut.questions).toBeDefined();
        expect(cut.questions.length).toEqual(3);
        const questions = cut.questions;
        questions.forEach((el) => expect(el.score).toBeDefined());
    });
});
