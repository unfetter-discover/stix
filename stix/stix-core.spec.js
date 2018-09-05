"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UUID = require("uuid");
var stix_core_1 = require("./stix-core");
var stix_core_enum_1 = require("./stix-core.enum");
describe('stix core model', function () {
    var stix;
    beforeEach(function () {
        stix = new stix_core_1.StixCore();
        var uuid = UUID.v4();
        stix.id = stix_core_enum_1.StixCoreEnum.IDENTITY + uuid;
        stix.type = stix_core_enum_1.StixCoreEnum.IDENTITY;
    });
    it('should have a constructor', function () {
        expect(stix).toBeDefined();
    });
    it('should know its own type', function () {
        expect(stix).toBeDefined();
        expect(stix.type).toEqual(stix_core_enum_1.StixCoreEnum.IDENTITY);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(stix_core_enum_1.StixCoreEnum.IDENTITY.toString());
    });
});
