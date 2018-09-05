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
export declare class StixCore<T extends StixCoreEnum | StixEnum = StixCoreEnum | StixEnum> {
    [x_property_index: string]: any;
    created: Date | string;
    created_by_ref?: string;
    external_references?: ExternalReference[];
    granular_markings?: GranularMarking[];
    id?: string;
    labels?: string[];
    modified: string;
    revoked?: boolean;
    type: T;
    constructor(data?: object);
    /**
     * @description generate json from this object
     * @return {string}
     */
    toJson(delim?: string): string;
}
/**
 * @description Most, but not all STIX classes, have name and description properties
 */
export declare class StixExpanded<T extends StixCoreEnum | StixEnum = StixCoreEnum | StixEnum> extends StixCore<T> {
    description?: string;
    name: string;
}
export interface KillChain {
    kill_chain_phases?: KillChainPhase[];
}
