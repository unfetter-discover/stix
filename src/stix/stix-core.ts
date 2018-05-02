import { StixEnum } from '../unfetter/stix.enum';
import { ExternalReference } from './external_reference';
import { GranularMarking } from './granular-marking';
import { KillChainPhase } from './kill-chain-phase';
import { StixCoreEnum } from './stix-core.enum';

/**
 * @description base stix 2.0 object
 * @see https://stixproject.github.io/
 * @see https://oasis-open.github.io/cti-documentation/
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 *
 * This references unfetter stix code and create a circular dependency,
 *  but one cannot extend a typescript string enum class
 */
export class StixCore<T extends StixCoreEnum = StixCoreEnum, E extends StixEnum = StixEnum> {
    public created = new Date().toISOString();
    public created_by_ref: string;
    public description: string;
    public external_references: ExternalReference[];
    public granular_markings: GranularMarking[];
    public id?: string;
    public kill_chain_phases?: KillChainPhase[];
    public labels: string[];
    public modified: string;
    public name: string;
    public object_refs?: string[];
    public pattern: string;
    public type: T | E;
    public valid_from = new Date().toISOString();
    public version = 2.0;

    // TODO: determine if revoked belongs in this base class

    constructor(data?: object) {
        Object.assign(this, data);
    }

    /**
     * @description generate json from this object
     * @return {string}
     */
    public toJson(delim = '\t'): string {
        return JSON.stringify(this, undefined, delim);
    }

}
