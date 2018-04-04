import { StixEnum } from '../../unfetter/stix.enum';

/**
 * @description assessment set represents many object assessments,
 *  ie answers to many capabilities vs attack attackpatterns
 * assessments set can represent state of an assessed infrastructure. ex. AsIs, ToBe, IfImplemented...
 */
export class AssessmentSet {
    public id?: string;
    public name: string;
    public description: string;
    public type: StixEnum.ASSESSMENT_SET;
    public modified: string;
    public created = new Date().toISOString();
    // created by ref is a identity id
    public created_by_ref: string;
    // assessments are object assessment ids
    public assessments: string[];
}
