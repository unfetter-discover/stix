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
export class StixCore<T extends StixCoreEnum | StixEnum = StixCoreEnum | StixEnum> {
    [x_property_index: string]: any;
    public created: Date | string = new Date().toISOString();
    public created_by_ref?: string;
    public external_references?: ExternalReference[];
    public granular_markings?: GranularMarking[];
    public id?: string;
    public labels?: string[];
    public modified: string;
    public revoked?: boolean;
    public type: T;

    constructor(data?: object) {
        Object.assign(this, data);
    }

    /**
     * @description generate json from this object
     * @return {string}
     */
    public toJson(delim = '\t'): string {
        return JSON.stringify(this, null, delim);
    }

}

/**
 * @description Most, but not all STIX classes, have name and description properties
 */
export class StixExpanded<T extends StixCoreEnum | StixEnum = StixCoreEnum | StixEnum> extends StixCore<T> {
    public description?: string;
    public name: string;
}

export interface KillChain {
    kill_chain_phases?: KillChainPhase[];
}
