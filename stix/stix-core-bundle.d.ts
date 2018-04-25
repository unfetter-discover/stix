import { StixCore } from './stix-core';
/**
 * @description bundle holding stix objects
 */
export declare class StixCoreBundle<T extends StixCore = StixCore> {
    objects: T[];
    readonly type: string;
    readonly id: string;
    readonly spec_version: string;
    constructor(objects?: T[]);
    /**
     * @description generate json from this object
     * @return {string}
     */
    toJson(delim?: string): string;
}
