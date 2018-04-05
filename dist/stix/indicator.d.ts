import { StixCore } from './stix-core';
/**
 *
 */
export declare class Indicator extends StixCore {
    pattern_lang: string;
    pattern: string;
    valid_until: string;
    /**
     *
     * @param data
     */
    constructor(data?: object);
}
