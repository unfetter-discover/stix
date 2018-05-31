import { Dictionary } from '../../../common/dictionary';
import { MetaProps } from '../../../unfetter/meta-props';
import { StixEnum } from '../../../unfetter/stix.enum';
import { UnfetterStixProperties } from '../../../unfetter/unfetter-stix-properties';
/**
 * @description assessment set represents many object assessments,
 *  ie answers to many capabilities vs attack attackpatterns
 * assessments set can represent state of an assessed infrastructure. ex. AsIs, ToBe, IfImplemented...
 */
export declare class AssessmentSet implements UnfetterStixProperties {
    assessments: string[];
    created: string;
    created_by_ref: string;
    description: string;
    id?: string;
    modified: string;
    name: string;
    metaProperties?: MetaProps;
    extendedProperties?: Dictionary;
    readonly type: StixEnum;
}
