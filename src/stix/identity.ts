import { StixCoreEnum } from '../stix/stix-core.enum';
import { OpenVocab } from './open-vocab';
import { StixCore } from './stix-core';

/**
 * @description identity
 *
 * @see https://docs.google.com/document/d/1IvkLxg_tCnICsatu2lyxKmWmh1gY2h8HUNssKIE-UIA/edit#
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export class Identity extends StixCore {
    public readonly type = StixCoreEnum.IDENTITY;
    public identity_class: string;
    public name: string;

    // TODO: define openvocab
    public sectors?: OpenVocab[] | string[];
    public contact_information?: string;

    /**
     * @param data
     */
    constructor(data?: any) {
        super(data);
    }

}
