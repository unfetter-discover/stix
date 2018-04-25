import { KillChainEnum } from './kill-chain.enum';
/**
 * @see http://docs.oasis-open.org/cti/stix/v2.0/cs01/part1-stix-core/stix-v2.0-cs01-part1-stix-core.html#_Toc496709267
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export declare class KillChainPhase {
    kill_chain_name: KillChainEnum | string;
    phase_name: string;
    /**
     * @param data
     */
    constructor(kill_chain_name: KillChainEnum | string, phase_name: string);
}
