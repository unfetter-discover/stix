"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_1 = require("./stix-core");
const stix_core_bundle_1 = require("./stix-core-bundle");
describe('stix bundle model', () => {
    let bundle;
    beforeEach(() => {
        bundle = new stix_core_bundle_1.StixCoreBundle();
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
        const stix = new stix_core_1.StixCore();
        const objects = [stix];
        bundle.objects = objects;
        const json = bundle.toJson();
        expect(json).toBeDefined();
        expect(json).toContain('stix-archive-bundle');
    });
});
