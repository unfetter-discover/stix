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
    version: number;
    external_references: ExternalReference[];
    granular_markings: GranularMarking[];
    name: string;
    description: string;
    pattern: string;
    kill_chain_phases?: KillChainPhase[];
    object_refs?: string[];
    id?: string;
    created_by_ref: string;
    type: T | E;
    valid_from: string;
    labels: string[];
    modified: string;
    created: string;
    constructor(data?: object);
    /**
     * @description generate json from this object
     * @return {string}
     */
    toJson(delim?: string): string;
}
