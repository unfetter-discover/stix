import { StixEnum } from '../../../unfetter/stix.enum';

/**
 * @description assessment group contains references to several assessment sets
 * Useful to store state when doing comparisons across sets
 */
export class AssessmentGroup {
    public id?: string;
    public type: StixEnum.ASSESSMENT_SET;
    public description: string;
    public created = new Date().toISOString();
    public modified: string;
    // created by ref contains a identity id
    public created_by_ref: string;
    // assessment sets array contains ids of a assessment set
    public assessment_sets: string[];
}
