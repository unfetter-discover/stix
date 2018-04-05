import { AssessmentQuestion } from './assessment-question';

/**
 * @description
 */
export class AssessKillChainType {
    public risk: number;
    public questions = [] as AssessmentQuestion[];
    public objects = [] as any[];
    public phaseName: string;
}
