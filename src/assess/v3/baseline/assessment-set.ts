import { Dictionary } from '../../../common/dictionary';
import { MetaProps } from '../../../unfetter/meta-props';
import { StixEnum } from '../../../unfetter/stix.enum';
import { UnfetterStixProperties } from '../../../unfetter/unfetter-stix-properties';

/**
 * @description assessment set represents many object assessments,
 *  ie answers to many capabilities vs attack attackpatterns
 * assessments set can represent state of an assessed infrastructure. ex. AsIs, ToBe, IfImplemented...
 */
export class AssessmentSet implements UnfetterStixProperties {
    // assessments are object assessment ids
    public assessments: string[];
    // created by ref is a identity id
    public created = new Date().toISOString();
    public created_by_ref: string;
    public description: string;
    public id?: string;
    public modified: string;
    public name: string;

    public metaProperties?: MetaProps;
    public extendedProperties?: Dictionary;
    public readonly type = StixEnum.ASSESSMENT_SET;
}
