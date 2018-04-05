import { StixEnum } from '../../unfetter/stix.enum';
import { AssessedObject } from './assessed-object';
/**
 * @description Object assessment represents attack pattern to capability answers
 */
export declare class ObjectAssessment {
    id?: string;
    name: string;
    description: string;
    type: StixEnum;
    modified: Date;
    created: string;
    created_by_ref: string;
    object_ref: string;
    assessments_objects: AssessedObject[];
}
