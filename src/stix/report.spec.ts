import * as UUID from 'uuid';
import { Report } from './report';
import { StixCoreEnum } from './stix-core.enum';

describe('report stix model', () => {

    let stix: Report;

    beforeEach(() => {
        stix = new Report();
        const uuid = UUID.v4();
        stix.id = StixCoreEnum.REPORT + uuid;
        stix.type = StixCoreEnum.REPORT;
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
        expect(stix.type).toEqual(StixCoreEnum.REPORT);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(StixCoreEnum.REPORT.toString());
    });

});
