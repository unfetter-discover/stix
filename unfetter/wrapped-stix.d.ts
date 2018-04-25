import { StixCore } from '../stix/stix-core';
import { Stix } from './stix';
/**
 * @description sometimes unfetter wraps stix
 */
export declare class WrappedStix<T extends StixCore = Stix> {
    stix: Stix;
}
