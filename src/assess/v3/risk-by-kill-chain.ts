import { AssessKillChainType } from '../v2/assess-kill-chain-type';

/**
 * @description kill chain data for risk analysis
 */
export class RiskByKillChain {
    public courseOfActions = [] as AssessKillChainType[];
    public indicators = [] as AssessKillChainType[];
    public sensors = [] as AssessKillChainType[];
    public capabilities = [] as AssessKillChainType[];
}
