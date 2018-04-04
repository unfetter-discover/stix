import { StixEnum } from "../../unfetter/stix.enum";
/**
 * @description assessment group contains references to several assessment sets
 * Useful to store state when doing comparisons across sets
 */
export declare class AssessmentGroup {
    id?: string;
    type: StixEnum.ASSESSMENT_SET;
    description: string;
    created: string;
    modified: string;
    created_by_ref: string;
    assessment_sets: string[];
}
