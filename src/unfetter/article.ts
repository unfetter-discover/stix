import { Dictionary } from '../common/dictionary';
import { MetaProps } from './meta-props';
import { ExpandedStix } from './stix';
import { StixEnum } from './stix.enum';
import { UnfetterStixProperties } from './unfetter-stix-properties';

/**
 * @descriptio
 */
export class Article extends ExpandedStix implements UnfetterStixProperties {
    public metaProperties?: MetaProps;
    public extendedProperties?: Dictionary<string>;

    public content: string;
    public sources?: string[];

    constructor(data?: any) {
        super();
        Object.assign(this, data);
        this.type = StixEnum.ARTICLE;
    }
}
