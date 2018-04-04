import { StixCore } from './stix-core';
import { StixCoreBundle } from './stix-core-bundle';

describe('stix bundle model', () => {

    let bundle: StixCoreBundle;

    beforeEach(() => {
        bundle = new StixCoreBundle();
    });

    it('should have a constructor', () => {
        expect(bundle).toBeDefined();
    });

    it('should know its own type', () => {
        expect(bundle).toBeDefined();
        expect(bundle.id).toEqual('stix-archive-bundle');
        expect(bundle.spec_version).toEqual('2.0');
        expect(bundle.type).toEqual('bundle');
    });

    it('should know how to generate json', () => {
        expect(bundle).toBeDefined();
        const stix = new StixCore();
        const objects = [ stix ];
        bundle.objects = objects;
        const json = bundle.toJson();
        expect(json).toBeDefined();
        expect(json).toContain('stix-archive-bundle');
    });
});
