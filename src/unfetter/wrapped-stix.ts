import { StixCore } from '../stix/stix-core';
import { Stix } from './stix';

/**
 * @description sometimes unfetter wraps stix
 */
export class WrappedStix<T extends StixCore = Stix> {
    public stix = new Stix();
}
