"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_1 = require("./stix-core");
var stix_core_bundle_1 = require("./stix-core-bundle");
describe('stix bundle model', function () {
    var bundle;
    beforeEach(function () {
        bundle = new stix_core_bundle_1.StixCoreBundle();
    });
    it('should have a constructor', function () {
        expect(bundle).toBeDefined();
    });
    it('should know its own type', function () {
        expect(bundle).toBeDefined();
        expect(bundle.id).toEqual('stix-archive-bundle');
        expect(bundle.spec_version).toEqual('2.0');
        expect(bundle.type).toEqual('bundle');
    });
    it('should know how to generate json', function () {
        expect(bundle).toBeDefined();
        var stix = new stix_core_1.StixCore();
        var objects = [stix];
        bundle.objects = objects;
        var json = bundle.toJson();
        expect(json).toBeDefined();
        expect(json).toContain('stix-archive-bundle');
    });
});
