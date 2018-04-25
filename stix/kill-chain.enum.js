"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description enumeration to store cyber threat framework, kill chain names
 * @see https://attack.mitre.org/wiki/Introduction_and_Overview
 * @see https://www.lockheedmartin.com/us/what-we-do/aerospace-defense/cyber/cyber-kill-chain.html
 * @see https://www.dni.gov/files/ODNI/documents/features/A_Common_Cyber_Threat_Framework_Overview.pdf
 */
var KillChainEnum;
(function (KillChainEnum) {
    KillChainEnum["MITRE_ATTACK"] = "mitre-attack";
    KillChainEnum["LH_CTF"] = "lh-ctf";
    KillChainEnum["NTCTF"] = "ntctf";
})(KillChainEnum = exports.KillChainEnum || (exports.KillChainEnum = {}));
