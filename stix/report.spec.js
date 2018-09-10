"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UUID = require("uuid");
var report_1 = require("./report");
var stix_core_enum_1 = require("./stix-core.enum");
describe('report stix model', function () {
    var stix;
    beforeEach(function () {
        stix = new report_1.Report();
        var uuid = UUID.v4();
        stix.id = stix_core_enum_1.StixCoreEnum.REPORT + uuid;
        stix.type = stix_core_enum_1.StixCoreEnum.REPORT;
    });
    it('should have a constructor', function () {
        expect(stix).toBeDefined();
    });
    it('should know its own type', function () {
        expect(stix).toBeDefined();
        expect(stix.type).toEqual(stix_core_enum_1.StixCoreEnum.REPORT);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(stix_core_enum_1.StixCoreEnum.REPORT.toString());
    });
});
