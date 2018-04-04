import { StixCore } from './stix-core';
import { StixCoreEnum } from './stix-core.enum';

import * as UUID from 'uuid';

describe('stix core model', () => {

    let stix: StixCore;

    beforeEach(() => {
        stix = new StixCore();
        const uuid = UUID.v4();
        stix.id = StixCoreEnum.IDENTITY + uuid;
        stix.type = StixCoreEnum.IDENTITY;
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
        expect(stix.type).toEqual(StixCoreEnum.IDENTITY);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(StixCoreEnum.IDENTITY.toString());
    });

});
