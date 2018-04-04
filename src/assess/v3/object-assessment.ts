import { StixEnum } from "../../unfetter/stix.enum";
import { AssessedObject } from "./assessed-object";

/**
 * @description Object assessment represents attack pattern to capability answers
 */
export class ObjectAssessment {
    public id?: string;
    public name: string;
    public description: string;
    public type: StixEnum;
    public modified: Date;
    public created = new Date().toISOString();
    // created by ref is a identity id
    public created_by_ref: string; 
    // object ref is a capability id
    public object_ref: string; 
    // AssessedObject has a attack pattern ids
    public assessments_objects: AssessedObject[]; 
}