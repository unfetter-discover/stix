import { Dictionary } from '../common/dictionary';
import { MetaProps } from './meta-props';
import { ExpandedStix } from './stix';
import { StixEnum } from './stix.enum';
import { UnfetterStixProperties } from './unfetter-stix-properties';

/**
 * @description unfetter data modal for the threat dashboard
 */
export class ThreatBoard extends ExpandedStix implements UnfetterStixProperties {
    public metaProperties?: MetaProps;
    public extendedProperties?: Dictionary<string>;

    public articles: any[];
    public boundaries: {
        end_date: Date | string;
        intrusion_sets: string[];
        malware: string[];
        start_date: Date | string;
        targets: string[];
    };
    public reports: string[];

    constructor(data?: any) {
        super();
        Object.assign(this, data);
        this.type = StixEnum.THREAT_BOARD;
    }
}
