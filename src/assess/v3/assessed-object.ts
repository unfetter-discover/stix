import { Question } from "./question";

/**
 * @description assessed object represents the three questions/answers to a single attack pattern
 */
export class AssessedObject {
    // ref to attack pattern id
    assessed_object_ref: string;
    questions: Question[];
}
