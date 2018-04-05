import { StixCore } from './stix-core';

/**
 * @description bundle holding stix objects
 */
export class StixCoreBundle<T extends StixCore = StixCore> {
    public readonly type = 'bundle';
    public readonly id = 'stix-archive-bundle';
    public readonly spec_version = '2.0';

    constructor(public objects: T[] = []) { }

    /**
     * @description generate json from this object
     * @return {string}
     */
    public toJson(delim = '\t'): string {
        return JSON.stringify(this, undefined, delim);
    }
}
