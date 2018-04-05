import { KillChainEnum } from './kill-chain.enum';

/**
 * @see http://docs.oasis-open.org/cti/stix/v2.0/cs01/part1-stix-core/stix-v2.0-cs01-part1-stix-core.html#_Toc496709267
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export class KillChainPhase {
    public kill_chain_name: KillChainEnum;
    public phase_name: string;
}
