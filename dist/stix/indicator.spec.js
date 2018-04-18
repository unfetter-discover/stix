"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_enum_1 = require("./stix-core.enum");
const UUID = require("uuid");
const indicator_1 = require("./indicator");
describe('indicator stix model', () => {
    let stix;
    let pattern;
    beforeEach(() => {
        pattern = '[process:pid=5]';
        stix = new indicator_1.Indicator({ pattern });
        const uuid = UUID.v4();
        stix.id = stix_core_enum_1.StixCoreEnum.INDICATOR + uuid;
        stix.type = stix_core_enum_1.StixCoreEnum.INDICATOR;
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
        expect(stix.type).toEqual(stix_core_enum_1.StixCoreEnum.INDICATOR);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(stix_core_enum_1.StixCoreEnum.INDICATOR.toString());
    });
    it('should carry forward fields from the copy constructor', () => {
        expect(stix).toBeDefined();
        expect(stix.pattern).toBeDefined();
        expect(stix.pattern).toEqual(pattern);
    });
});
