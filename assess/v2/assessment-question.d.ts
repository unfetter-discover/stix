import { RiskValue } from './risk-value';
/**
 * @description
 */
export declare class AssessmentQuestion {
    name: string;
    risk: number;
    options: RiskValue[];
    selected_value: RiskValue;
}
