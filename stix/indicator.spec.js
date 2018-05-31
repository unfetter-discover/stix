"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("./stix-core.enum");
var UUID = require("uuid");
var indicator_1 = require("./indicator");
describe('indicator stix model', function () {
    var stix;
    var pattern;
    beforeEach(function () {
        pattern = '[process:pid=5]';
        stix = new indicator_1.Indicator({ pattern: pattern });
        var uuid = UUID.v4();
        stix.id = stix_core_enum_1.StixCoreEnum.INDICATOR + uuid;
        stix.type = stix_core_enum_1.StixCoreEnum.INDICATOR;
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
        expect(stix.type).toEqual(stix_core_enum_1.StixCoreEnum.INDICATOR);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(stix_core_enum_1.StixCoreEnum.INDICATOR.toString());
    });
    it('should carry forward fields from the copy constructor', function () {
        expect(stix).toBeDefined();
        expect(stix.pattern).toBeDefined();
        expect(stix.pattern).toEqual(pattern);
    });
});
