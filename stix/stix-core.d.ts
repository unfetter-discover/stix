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
export declare class StixCore<T extends StixCoreEnum = StixCoreEnum, E extends StixEnum = StixEnum> {
    created: string;
    created_by_ref: string;
    description: string;
    external_references: ExternalReference[];
    granular_markings: GranularMarking[];
    id?: string;
    kill_chain_phases?: KillChainPhase[];
    labels: string[];
    modified: string;
    name: string;
    object_refs?: string[];
    pattern: string;
    type: T | E;
    valid_from: string;
    version: number;
    constructor(data?: object);
    /**
     * @description generate json from this object
     * @return {string}
     */
    toJson(delim?: string): string;
}
