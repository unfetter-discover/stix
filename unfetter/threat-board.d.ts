import { Dictionary } from '../common/dictionary';
import { MetaProps } from './meta-props';
import { ExpandedStix } from './stix';
import { UnfetterStixProperties } from './unfetter-stix-properties';
/**
 * @description unfetter data modal for the threat dashboard
 */
export declare class ThreatBoard extends ExpandedStix implements UnfetterStixProperties {
    metaProperties?: MetaProps;
    extendedProperties?: Dictionary<string>;
    articles: any[];
    boundaries: {
        end_date: Date | string;
        intrusion_sets: string[];
        malware: string[];
        start_date: Date | string;
        targets: string[];
    };
    reports: string[];
    constructor(data?: any);
}
