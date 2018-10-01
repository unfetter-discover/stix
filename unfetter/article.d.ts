import { Dictionary } from '../common/dictionary';
import { MetaProps } from './meta-props';
import { ExpandedStix } from './stix';
import { UnfetterStixProperties } from './unfetter-stix-properties';
/**
 * @descriptio
 */
export declare class Article extends ExpandedStix implements UnfetterStixProperties {
    metaProperties?: MetaProps;
    extendedProperties?: Dictionary<string>;
    content: string;
    sources?: string[];
    constructor(data?: any);
}
