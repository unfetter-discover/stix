import { StixCoreEnum } from './stix-core.enum';

import * as UUID from 'uuid';
import { Indicator } from './indicator';

describe('indicator stix model', () => {

    let stix: Indicator;
    let pattern: string;

    beforeEach(() => {
        pattern = '[process:pid=5]';
        stix = new Indicator({ pattern });
        const uuid = UUID.v4();
        stix.id = StixCoreEnum.INDICATOR + uuid;
        stix.type = StixCoreEnum.INDICATOR;
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
        expect(stix.type).toEqual(StixCoreEnum.INDICATOR);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(StixCoreEnum.INDICATOR.toString());
    });

    it('should carry forward fields from the copy constructor', () => {
        expect(stix).toBeDefined();
        expect(stix.pattern).toBeDefined();
        expect(stix.pattern).toEqual(pattern);
    });
});
