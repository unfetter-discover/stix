import { StixCoreEnum } from '../stix/stix-core.enum';
import { OpenVocab } from './open-vocab';
import { StixCore } from './stix-core';
/**
 * @description identity
 *
 * @see https://docs.google.com/document/d/1IvkLxg_tCnICsatu2lyxKmWmh1gY2h8HUNssKIE-UIA/edit#
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export declare class Identity extends StixCore {
    readonly type: StixCoreEnum;
    identity_class: string;
    name: string;
    sectors?: OpenVocab[] | string[];
    contact_information?: string;
    /**
     * @param data
     */
    constructor(data?: StixCore);
}
