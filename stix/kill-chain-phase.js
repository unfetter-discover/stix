"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @see http://docs.oasis-open.org/cti/stix/v2.0/cs01/part1-stix-core/stix-v2.0-cs01-part1-stix-core.html#_Toc496709267
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
var KillChainPhase = /** @class */ (function () {
    /**
     * @param data
     */
    function KillChainPhase(kill_chain_name, phase_name) {
        this.kill_chain_name = kill_chain_name;
        this.phase_name = phase_name;
    }
    return KillChainPhase;
}());
exports.KillChainPhase = KillChainPhase;
