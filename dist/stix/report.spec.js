"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID = require("uuid");
const report_1 = require("./report");
const stix_core_enum_1 = require("./stix-core.enum");
describe('report stix model', () => {
    let stix;
    beforeEach(() => {
        stix = new report_1.Report();
        const uuid = UUID.v4();
        stix.id = stix_core_enum_1.StixCoreEnum.REPORT + uuid;
        stix.type = stix_core_enum_1.StixCoreEnum.REPORT;
    });
    it('should have a constructor', () => {
        expect(stix).toBeDefined();
    });
    it('should know have a version', () => {
        expect(stix).toBeDefined();
        expect(stix.version).toEqual('2.0');
    });
    it('should know its own type', () => {
        expect(stix).toBeDefined();
        expect(stix.type).toEqual(stix_core_enum_1.StixCoreEnum.REPORT);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(stix_core_enum_1.StixCoreEnum.REPORT.toString());
    });
});
